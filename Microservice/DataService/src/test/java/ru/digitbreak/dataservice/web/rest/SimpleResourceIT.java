package ru.digitbreak.dataservice.web.rest;

import ru.digitbreak.dataservice.DataServiceApp;
import ru.digitbreak.dataservice.domain.Simple;
import ru.digitbreak.dataservice.repository.SimpleRepository;
import ru.digitbreak.dataservice.service.SimpleService;
import ru.digitbreak.dataservice.web.rest.errors.ExceptionTranslator;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.Validator;

import javax.persistence.EntityManager;
import java.util.List;

import static ru.digitbreak.dataservice.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

/**
 * Integration tests for the {@Link SimpleResource} REST controller.
 */
@SpringBootTest(classes = DataServiceApp.class)
public class SimpleResourceIT {

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    @Autowired
    private SimpleRepository simpleRepository;

    @Autowired
    private SimpleService simpleService;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    @Autowired
    private Validator validator;

    private MockMvc restSimpleMockMvc;

    private Simple simple;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final SimpleResource simpleResource = new SimpleResource(simpleService);
        this.restSimpleMockMvc = MockMvcBuilders.standaloneSetup(simpleResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter)
            .setValidator(validator).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Simple createEntity(EntityManager em) {
        Simple simple = new Simple()
            .description(DEFAULT_DESCRIPTION);
        return simple;
    }
    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Simple createUpdatedEntity(EntityManager em) {
        Simple simple = new Simple()
            .description(UPDATED_DESCRIPTION);
        return simple;
    }

    @BeforeEach
    public void initTest() {
        simple = createEntity(em);
    }

    @Test
    @Transactional
    public void createSimple() throws Exception {
        int databaseSizeBeforeCreate = simpleRepository.findAll().size();

        // Create the Simple
        restSimpleMockMvc.perform(post("/api/simples")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(simple)))
            .andExpect(status().isCreated());

        // Validate the Simple in the database
        List<Simple> simpleList = simpleRepository.findAll();
        assertThat(simpleList).hasSize(databaseSizeBeforeCreate + 1);
        Simple testSimple = simpleList.get(simpleList.size() - 1);
        assertThat(testSimple.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
    }

    @Test
    @Transactional
    public void createSimpleWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = simpleRepository.findAll().size();

        // Create the Simple with an existing ID
        simple.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restSimpleMockMvc.perform(post("/api/simples")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(simple)))
            .andExpect(status().isBadRequest());

        // Validate the Simple in the database
        List<Simple> simpleList = simpleRepository.findAll();
        assertThat(simpleList).hasSize(databaseSizeBeforeCreate);
    }


    @Test
    @Transactional
    public void getAllSimples() throws Exception {
        // Initialize the database
        simpleRepository.saveAndFlush(simple);

        // Get all the simpleList
        restSimpleMockMvc.perform(get("/api/simples?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(simple.getId().intValue())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())));
    }
    
    @Test
    @Transactional
    public void getSimple() throws Exception {
        // Initialize the database
        simpleRepository.saveAndFlush(simple);

        // Get the simple
        restSimpleMockMvc.perform(get("/api/simples/{id}", simple.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(simple.getId().intValue()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingSimple() throws Exception {
        // Get the simple
        restSimpleMockMvc.perform(get("/api/simples/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateSimple() throws Exception {
        // Initialize the database
        simpleService.save(simple);

        int databaseSizeBeforeUpdate = simpleRepository.findAll().size();

        // Update the simple
        Simple updatedSimple = simpleRepository.findById(simple.getId()).get();
        // Disconnect from session so that the updates on updatedSimple are not directly saved in db
        em.detach(updatedSimple);
        updatedSimple
            .description(UPDATED_DESCRIPTION);

        restSimpleMockMvc.perform(put("/api/simples")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedSimple)))
            .andExpect(status().isOk());

        // Validate the Simple in the database
        List<Simple> simpleList = simpleRepository.findAll();
        assertThat(simpleList).hasSize(databaseSizeBeforeUpdate);
        Simple testSimple = simpleList.get(simpleList.size() - 1);
        assertThat(testSimple.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
    }

    @Test
    @Transactional
    public void updateNonExistingSimple() throws Exception {
        int databaseSizeBeforeUpdate = simpleRepository.findAll().size();

        // Create the Simple

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        restSimpleMockMvc.perform(put("/api/simples")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(simple)))
            .andExpect(status().isBadRequest());

        // Validate the Simple in the database
        List<Simple> simpleList = simpleRepository.findAll();
        assertThat(simpleList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    @Transactional
    public void deleteSimple() throws Exception {
        // Initialize the database
        simpleService.save(simple);

        int databaseSizeBeforeDelete = simpleRepository.findAll().size();

        // Delete the simple
        restSimpleMockMvc.perform(delete("/api/simples/{id}", simple.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isNoContent());

        // Validate the database is empty
        List<Simple> simpleList = simpleRepository.findAll();
        assertThat(simpleList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Simple.class);
        Simple simple1 = new Simple();
        simple1.setId(1L);
        Simple simple2 = new Simple();
        simple2.setId(simple1.getId());
        assertThat(simple1).isEqualTo(simple2);
        simple2.setId(2L);
        assertThat(simple1).isNotEqualTo(simple2);
        simple1.setId(null);
        assertThat(simple1).isNotEqualTo(simple2);
    }
}
