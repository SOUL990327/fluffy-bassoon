// data/cardText.ts
type CardTextBlock = {
    title: string;
    verses: { sanskrit: string; translation: string }[];
};

export const cardTextMap: Record<string, CardTextBlock> = {
    "1": {
        title: "Śrī Guru Praṇāma",
        verses: [
            {
                sanskrit: "oṁ ajñāna-timirāndhasya\njñānāñjana-śalākayā\ncakṣur unmilitaṁ yena\ntasmai śrī-gurave namaḥ",
                translation:
                    "I offer my respectful obeisances unto my spiritual master, who has opened my eyes, which were blinded by the darkness of ignorance, with the torchlight of knowledge.",
            },
        ],
    },

    "2": {
        title: "Śrī Rūpa Praṇāma",
        verses: [
            {
                sanskrit:
                    "śrī-caitanya-mano-’bhiṣṭaṁ\nsthāpitaṁ yena bhū-tale\nsvayaṁ rūpaḥ kadā mahyaṁ\ndadāti sva-padāntikam",
                translation:
                    "When will Śrīla Rūpa Gosvāmī Prabhupāda, who has established within this material world the mission to fulfill the desire of Lord Caitanya, give me shelter under his lotus feet?",
            },
        ],
    },
    "3": {
        title: "Maṅgalācaraṇa",
        verses: [
            {
                sanskrit: `vande ‘haṁ śrī-guroḥ śrī-yuta-pāda-kamalaṁ śrī-gurūn vaiṣṇavāṁś ca  
śrī-rūpaṁ sāgrajātaṁ saha-gaṇa-raghunāthānvitaṁ taṁ sa jīvam  
sadvaitaṁ sāvadhūtaṁ parijana-sahitaṁ kṛṣṇa-caitanya-devaṁ  
śrī-rādhā-kṛṣṇa-pādān saha-gaṇa-lalitā-śrī-viśākhānvitāṁś ca`,
                translation: `I offer my respectful obeisances unto the lotus feet of my spiritual master and of all the other preceptors on the path of devotional service. I offer my respectful obeisances unto all the Vaiṣṇavas and unto the six Gosvāmīs, including Śrīla Rūpa Gosvāmī, Śrīla Sanātana Gosvāmī, Raghunātha dāsa Gosvāmī, Jīva Gosvāmī, and their associates. I offer my respectful obeisances unto Advaita Ācārya Prabhu, Śrī Nityānanda Prabhu, Śrī Caitanya Mahāprabhu, and all His devotees, headed by Śrīvāsa Ṭhākura. I then offer my respectful obeisances unto the lotus feet of Lord Kṛṣṇa, Śrīmatī Rādhārāṇī, and all the gopīs, headed by Lalitā and Viśākhā.`,
            },
        ],
    },
    "4": {
        title: "Śrīla Prabhupāda Praṇati",
        verses: [
            {
                sanskrit: `nama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale  
śrīmate bhaktivedānta-swāmin iti nāmine`,
                translation: `I offer my respectful obeisances unto His Divine Grace A. C. Bhaktivedānta Swāmī Prabhupāda, who is very dear to Lord Kṛṣṇa, having taken shelter at His lotus feet.`,
            },
            {
                sanskrit: `namas te sārasvate deve gaura-vāṇī-pracāriṇe  
nirviśeṣa-śūnyavādi-pāścātya-deśa-tāriṇe`,
                translation: `Our respectful obeisances are unto you, O spiritual master, servant of Bhaktisiddhānta Sarasvatī Gosvāmī. You are kindly preaching the message of Lord Caitanyadeva and delivering the Western countries, which are filled with impersonalism and voidism.`,
            },
        ],
    },
    "5": {
        title: "Śrīla Bhaktisiddhānta Sarasvatī Praṇati",
        verses: [
            {
                sanskrit: `nama oṁ viṣṇu-pādāya kṛṣṇa-preṣṭhāya bhū-tale  
śrīmate bhaktisiddhānta-sarasvatīti nāmine`,
                translation: `I offer my respectful obeisances unto His Divine Grace Bhaktisiddhānta Sarasvatī, who is very dear to Lord Kṛṣṇa, having taken shelter at His lotus feet.`,
            },
            {
                sanskrit: `śrī-varṣabhānavī-devī-dayitāya kṛpābdhaye  
kṛṣṇa-sambandha-vijñāna-dāyine prabhave namaḥ`,
                translation: `I offer my respectful obeisances to Śrī Varṣabhānavī-devī-dayita dāsa [another name of Śrīla Bhaktisiddhānta Sarasvatī], who is favored by Śrīmatī Rādhārāṇī and who is the ocean of transcendental mercy and the deliverer of the science of Kṛṣṇa.`,
            },
            {
                sanskrit: `mādhuryojjvala-premāḍhya-śrī-rūpānuga-bhaktidā  
śrī-gaura-karuṇā-śakti-vigrahāya namo ’stu te`,
                translation: `I offer my respectful obeisances unto you, the personified energy of Śrī Caitanya’s mercy, who delivers devotional service which is enriched with conjugal love of Rādhā and Kṛṣṇa, coming exactly in the line of revelation of Śrīla Rūpa Gosvāmī.`,
            },
            {
                sanskrit: `namas te gaura-vāṇī-śrī-mūrtaye dīna-tāriṇe  
rūpānuga-viruddhāpasiddhānta-dhvānta-hāriṇe`,
                translation: `I offer my respectful obeisances unto you, who are the personified teachings of Lord Caitanya. You are the deliverer of the fallen souls. You do not tolerate any statement which is against the teachings of devotional service enunciated by Śrīla Rūpa Gosvāmī.`,
            },
        ],
    },
    "6": {
        title: "Śrīla Gaurakiśora Praṇati",
        verses: [
            {
                sanskrit: `namo gaura-kiśorāya sākṣād-vairāgya-mūrtaye  
vipralambha-rasāmbhodhe padāmbujāya te namaḥ`,
                translation: `I offer my respectful obeisances unto Gaura-kiśora dāsa Bābājī Mahārāja [the spiritual master of Śrīla Bhaktisiddhānta Sarasvatī], who is renunciation personified. He is always merged in a feeling of separation and intense love of Kṛṣṇa.`,
            },
        ],
    },
    "7": {
        title: "Śrīla Bhaktivinoda Praṇati",
        verses: [
            {
                sanskrit: `namo bhaktivinodāya sac-cid-ānanda-nāmine  
gaura-śakti-svarūpāya rūpānuga-varāya te`,
                translation: `I offer my respectful obeisances unto Saccidānanda Bhaktivinoda, who is the transcendental energy of Caitanya Mahāprabhu. He is a strict follower of the Gosvāmīs, headed by Śrīla Rūpa.`,
            },
        ],
    },
    "8": {
        title: "Śrīla Jagannātha Praṇati",
        verses: [
            {
                sanskrit: `gaurāvirbhāva-bhūmes tvaṁ nirdeṣṭā saj-jana-priyaḥ  
vaiṣṇava-sārvabhaumaḥ śrī-jagannāthāya te namaḥ`,
                translation: `I offer my respectful obeisances to Jagannātha dāsa Bābājī, who is respected by the entire Vaiṣṇava community and who discovered the place where Lord Caitanya appeared.`,
            },
        ],
    },
    "9": {
        title: "Śrī Vaiṣṇava Praṇāma",
        verses: [
            {
                sanskrit: `vañchā-kalpatarubhyaś ca kṛpā-sindhubhya eva ca  
patitānāṁ pāvanebhyo vaiṣṇavebhyo namo namaḥ`,
                translation: `I offer my respectful obeisances unto all the Vaiṣṇava devotees of the Lord. They are just like desire trees who can fulfill the desires of everyone, and they are full of compassion for the fallen conditioned souls.`,
            },
        ],
    },
    "10": {
        title: "Śrī Gaurāṅga Praṇāma",
        verses: [
            {
                sanskrit: `namo mahā-vadānyāya kṛṣṇa-prema-pradāya te  
kṛṣṇāya kṛṣṇa-caitanya-nāmne gaura-tviṣe namaḥ`,
                translation: `O most munificent incarnation! You are Kṛṣṇa Himself appearing as Śrī Kṛṣṇa Caitanya Mahāprabhu. You have assumed the golden color of Śrīmatī Rādhārāṇī, and You are widely distributing pure love of Kṛṣṇa. We offer our respectful obeisances unto You.`,
            },
        ],
    },
    "11": {
        title: "Śrī Pañca-tattva Praṇāma",
        verses: [
            {
                sanskrit: `pañca-tattvātmakam kṛṣṇaṁ bhakta-rūpa-svarūpakam  
bhaktāvatāraṁ bhaktākhyam namāmi bhakta-śaktikam`,
                translation: `I offer my obeisances unto the Supreme Lord, Kṛṣṇa, who is nondifferent from His features as a devotee, devotional incarnation, manifestation, pure devotee, and devotional energy.`,
            },
        ],
    },
    "12": {
        title: "Śrī Kṛṣṇa Praṇāma",
        verses: [
            {
                sanskrit: `he kṛṣṇa karuṇā-sindho dīna-bandho jagat-pate  
gopeśa gopikā-kānta rādhā-kānta namo ’stu te`,
                translation: `O my dear Krishna, ocean of mercy, You are the friend of the distressed and the source of creation. You are the master of the cowherdmen and the lover of the gopis, especially Radharani. I offer my respectful obeisances unto You.`,
            },
        ],
    },
    "13": {
        title: "Sambandhādhideva Praṇāma",
        verses: [
            {
                sanskrit: `jayatāṁ suratau paṅgor mama manda-mater gatiḥ  
mat-sarvasva-padāmbhojau rādhā-madana-mohanau`,
                translation: `Glory to the all-merciful Radha and Madana-mohana! I am lame and ill advised, yet They are my directors, and Their lotus feet are everything to me.`,
            },
        ],
    },
    "14": {
        title: "Abhidheyādhideva Praṇāma",
        verses: [
            {
                sanskrit: `divyad-vṛndāraṇya-kalpa-drumādhaḥ  
śrīmad-ratnāgara-siṁhāsana-sthau  
śrīmad-rādhā-śrīla-govinda-devau  
preṣṭhalībhiḥ sevyamānau smarāmi`,
                translation: `In a temple of jewels in Vrindavana, underneath a desire tree, Sri Sri Radha-Govinda, served by Their most confidential associates, sit upon an effulgent throne. I offer my most humble obeisances unto Them.`,
            },
        ],
    },
    "15": {
        title: "Prayojanādhideva Praṇāma",
        verses: [
            {
                sanskrit: `śrīman rasa-rasārambhī vaṁśī-vaṭa-taṭa-sthitaḥ  
karṣan veṇu-svanair gopīr gopīnāthaḥ śriye ’stu naḥ`,
                translation: `Sri Srila Gopinatha, who originated the transcendental mellow of the rasa dance, stands on the shore in Vamsivata and attracts the attention of the cowherd damsels with the sound of His celebrated flute. May they all confer upon us their benediction.`,
            },
        ],
    },
    "16": {
        title: "Śrī Rādhā Praṇāma",
        verses: [
            {
                sanskrit: `tapta-kāñcana-gaurāṅgī rādhē vṛndāvaneśvari  
vṛṣabhānu-sute devī praṇamāmi hari-priye`,
                translation: `I offer my respects to Radharani, whose bodily complexion is like molten gold and who is the Queen of Vrindavana. You are the daughter of King Vrisabhanu, and You are very dear to Lord Krishna.`,
            },
        ],
    },
    "17": {
        title: "Pañca-tattva Mahā-mantra",
        verses: [
            {
                sanskrit: `(jaya) śrī-kṛṣṇa-caitanya prabhu nityānanda  
śrī-advaita gadādhara śrīvāsādi-gaura-bhakta-vṛnda`,
                translation: "",
            },
        ],
    },

    "18": {
        title: "Hare Kṛṣṇa Mahā-mantra",
        verses: [
            {
                sanskrit: `hare kṛṣṇa hare kṛṣṇa  
kṛṣṇa kṛṣṇa hare hare  
hare rāma hare rāma  
rāma rāma hare hare`,
                translation: "",
            },
        ],
    },

    // You can continue for "3", "4", etc. similarly
};
