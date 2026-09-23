---
title: "Looking Beyond the Obvious"
date: 2026-09-23
author: "Gowreesh Mago"
publication: "mago2026looking"
description: "Abstract concept recognition for video understanding. What the semantic gap looks like for intent, emotion, metaphor and persuasion, how our survey organises the field into three pillars, where foundation models stand against humans, and the open problems that follow."
image: "blog/looking-beyond-the-obvious/abstract-concepts-taxonomy.png"
---

Modern video models can tell you that a crowd is gathering. They cannot tell you whether it is a protest, a celebration or an emergency. That distinction requires intent, social dynamics and emotion, none of which is a visible object. Our survey, [*Looking Beyond the Obvious: A Survey on Abstract Concept Recognition for Video Understanding*](https://arxiv.org/abs/2508.20765) (Mago, Mettes and Rudinac, *International Journal of Computer Vision*, 2026), maps the research that tries to close that gap. This post walks through it with the figures from a talk on abstract concept understanding in the era of foundation models.

## Visual metaphors: abstract concepts in action

A microphone drawn as a birdcage says "freedom of speech". A ketchup bottle sits in the magma chamber of a volcano. A driving glove holds a Macintosh mouse, a jar of night cream is a crescent moon, and a plug is a coffee cup with the words "feel energy". In each case the objects are trivial to recognise and the meaning is nowhere in the pixels. The advertisement works only once the viewer maps one domain onto another, which is [Lakoff and Johnson's](https://press.uchicago.edu/ucp/books/book/chicago/M/bo3637992.html) definition of metaphor: understanding and experiencing one kind of thing in terms of another.

{{< figure src="visual-metaphors.jpg" link="visual-metaphors.jpg" alt="Five print advertisements: a microphone drawn as a birdcage, a ketchup bottle inside a cutaway volcano, a driving glove holding a Macintosh mouse, a Nivea night cream jar as a crescent moon, and a plug shaped like a coffee cup." caption="Visual metaphors. Freedom of Speech (Red Dot Design Award), Heinz Hot Ketchup *Volcano*, Apple *Test drive a Macintosh*, Nivea *Night*, and a *Feel Energy* plug. Each depends on a mapping between two domains rather than on the objects shown." >}}

Video adds a further difficulty. Image metaphors combine unusual objects, such as a cheetah merged with a racecar. Video metaphors develop over time, as in a sequence where a racecar and a cheetah race side by side. A single frame gives no hint that a mapping is being set up. The clip below, from Kalarani, Bhattacharyya and Shekhar's [*Unveiling the Invisible: Captioning Videos with Metaphors*](https://arxiv.org/abs/2406.04886) (2024), is a case in point: the metaphor only exists once the sequence has played out.

{{< youtube id="lC5EhJl1wFE" title="Visual metaphor in video, example from Unveiling the Invisible" >}}

## What makes a concept abstract

Concrete concepts are easy to associate with materials. Abstract concepts are associated with notions and sentiments that can be felt but are hard to describe in concrete terms: justice, freedom, togetherness, pride, deceit. The survey uses Brysbaert's concreteness ratings to place descriptions on this axis, and it restricts its scope to abstract concepts that inherently need context and whose identification is affected by subjectivity.

{{< figure src="abstract-concepts.jpg" link="abstract-concepts.jpg" alt="A word cloud of abstract concepts: pain, skill, beliefs, justice, charity, culture, anger, integrity, misery, pride, trouble, sympathy, information, hate, friendship, success, courage, bravery, brilliance, compassion, hospitality, dedication, truth, knowledge, liberty, honesty, thought, progress, dreams, trust, education, loyalty, deceit, love, leisure, beauty, peace, faith." caption="Abstract concepts: ideas without a physical form, semantically rich, and without a one-to-one visual counterpart. [Image source: SchoolTutoring Academy](https://schooltutoring.com/help/english-review-of-abstract-and-concrete-language/)." >}}

The relation between the visible and the abstract is many-to-many. Different visual concepts and situations can express the same abstract concept, and the same visual concept can express several abstract ones. Violence can be read from police brutality or from a Renaissance painting. This is what makes abstract concepts resistant to the classification recipe that works for objects and actions.

### The semantic hierarchy

Semantics in vision and audio are usually described as a three-tier representation. The lowest tier holds low-level descriptors: shapes, edges, colour and texture for vision, frequency for audio. The middle tier holds objects, scenes, actions, rhythm and pitch. The highest tier holds dimensions close to human perception, such as mood, genre and artistic style. The semantic gap is the distance between what a model can compute at the lower tiers and what a person perceives at the top. Closing it means bringing model capabilities up the hierarchy.

{{< figure src="semantic-hierarchy-scene.jpg" link="semantic-hierarchy-scene.jpg" alt="A restaurant interior annotated at four semantic levels: low-level features such as colour and texture, objects and settings such as chandelier and indoors, semantic theme such as fine dining, and human perception such as a nice restaurant with an excellent atmosphere." caption="The semantic hierarchy on one scene. Recognising the chandelier is a mid-level problem. Reading the room as fine dining with an excellent atmosphere is the top of the hierarchy, where the gap is widest. Adapted from [Sharma et al. (2024)](https://doi.org/10.1016/j.jjimei.2024.100269)." >}}

{{< figure src="semantic-hierarchy-diagrams.jpg" link="semantic-hierarchy-diagrams.jpg" alt="Left: a pyramid from image elements and regions up through objects and scene elements to events and activities, with commonsense knowledge at the top. Right: a diagram of audio features from timbre and temporal low-level features through rhythm, pitch and harmony to genre, mood and instrument labels, with the semantic gap marked between the mid and top levels." caption="The same three tiers in images ([Aditya, Yang and Baral, 2019](https://arxiv.org/abs/1906.09954)) and in music ([Fu et al., 2011](https://doi.org/10.1109/TMM.2010.2098858)). The semantic gap sits between mid-level features and top-level labels in both." >}}

### Where the concept lives: content or receiver

The survey borrows Lasswell's model of communication, "who says what to whom with what effect", to locate where an abstract concept can occur. It can sit at the origin, carried as a signal in the content itself, or at the receiver, where it manifests as an emotion or a perception. Bateman's notion of meaning multiplication adds that modalities may carry little significance, or even contrary meanings, in isolation, yet together reveal something more. Both ideas shape the taxonomy below.

### Context

Three kinds of context stand between a frame and an abstract label.

- **Temporal context.** Many abstract concepts appear only over time. Themes, relationships between characters and the intent of actions become clear only when watching the entire video and analysing all modalities. The filmstrip below is the survey's own example: a philanthropic video in which a woman who grew up in an orphanage is helped to break into fashion design. The frame-level captions generated by BLIP-2 stay concrete, "a woman holding up a drawing of a woman with a heart", "an older man is hugging another", while the topic-level descriptions, poverty, care, aspiration and skills, affinity and parenthood, gratitude, achievement, only emerge as the narrative progresses.
- **External context.** Comprehending a video may require knowledge from outside it, such as cultural references or recent events. Earlier systems bolted this on with separate knowledge modules; foundation models supply it through large-scale training and cross-modal design.
- **Viewer context.** Lasswell's "to whom with what effect". The same action reads differently depending on the situation. Pointing at a cup on a dinner table means "give me water"; the same gesture at a sink full of dirty cups means "clean the cup"; at a shelf of beautiful cups it means "look at the cup".

{{< figure src="narrative-progression.jpg" link="narrative-progression.jpg" alt="A filmstrip of keyframes from a philanthropic video. Above each frame is an abstract topic label with its concreteness score: poverty, care, aspiration and skills, affinity and parenthood, gratitude, achievement. Below each frame is a concrete BLIP-2 caption." caption="Temporal context. Concrete captions from BLIP-2 (bottom) against abstract topic descriptions with Brysbaert concreteness scores (top). The abstract reading only exists across the sequence. Figure 2 of the survey." >}}

{{< figure src="intentqa-cup.jpg" link="intentqa-cup.jpg" alt="Diagram: the same action, pointing to a cup, in three situational contexts. A dinner table with a cup of water means give me water; a sink full of dirty cups means clean the cup; a shelf displaying beautiful cups means look at the cup." caption="Viewer and situational context. One action, three intents. From [Li et al., *IntentQA*](https://openaccess.thecvf.com/content/ICCV2023/html/Li_IntentQA_Context-aware_Video_Intent_Reasoning_ICCV_2023_paper.html) (ICCV 2023)." >}}

## Why it matters

Automated understanding of abstract concepts is what lets a model align with human reasoning and values rather than stay trapped in literal interpretation. The applications the survey names are concrete: predicting a video's viral potential from its content, anticipating user reactions, analysing political campaigns and leaders' leanings, curbing the misuse of recommendation algorithms for maximum reach, verifying the integrity of advertisements and political messaging, and filtering harmful content at scale. This is also the direct link to HAVA-Lab's responsible marketing project, which studies the role of video in organised online campaigns.

## Subjectivity

The second obstacle, after context, is that there is no one-to-one correspondence between visual concepts and abstract concepts. Love is expressed by dozens of unrelated scenes. Conversely, the same low-level attribute recurs across emotions. EmoSet, the largest image emotion dataset, annotates both the emotion and the visual attributes that accompany it, and the attributes do not partition the emotions: brightness, object class and facial expression all appear under anger, disgust, fear and sadness alike.

{{< figure src="emoset-attributes.jpg" link="emoset-attributes.jpg" alt="A grid from EmoSet with columns anger, disgust, fear and sadness, and rows brightness, object class and facial expression, showing that the same attribute occurs under every emotion." caption="One visual attribute, many abstract concepts. From [Yang et al., *EmoSet*](https://arxiv.org/abs/2307.07961) (ICCV 2023)." >}}

## How the survey was built

The survey started from the Semantic Scholar database, restricted to the leading computer vision, multimedia and language venues. Filtering on video in the title or abstract gave a corpus of several thousand papers. A language model summarised each paper's task with model and dataset names stripped out, the summaries were clustered by topic, and clusters covering conventional computer vision were pruned by hand. What remained was curated by dataset and extended through forward citation search. The taxonomy adapts [Pandiani and Presutti's](https://arxiv.org/abs/2308.10562) image-only, CNN-era organisation of abstract concepts into three pillars for video, grounded in communication science, psychology, cognitive science and neuroscience. To our knowledge it is the first comprehensive survey extending abstract concept recognition to video.

## The three pillars

{{< figure src="abstract-concepts-taxonomy.png" link="abstract-concepts-taxonomy.png" alt="Sunburst taxonomy of video understanding tasks. Perception understanding covers visual aesthetics, intent with action, conversation and communicative intent, semantic theme understanding, and user behaviour modelling and virality. Emotions and social signals covers affective analysis and social signal processing with relationships and situation analysis. Narrative and rhetorical analysis covers visual narrative understanding, figures of speech with visual metaphors and humour, sarcasm and satire, persuasion, and framing analysis with opinion and misinformation." caption="The survey's taxonomy. Perception understanding (yellow), emotions and social signals (pink), narrative and rhetorical analysis (blue). Figure 5 of the survey." >}}

Datasets across all three pillars are categorised by evaluation protocol: classification into discrete abstract categories, question answering in natural language, regression of continuous scores such as valence and arousal, captioning, retrieval, and ranking by the strength of an abstract attribute such as persuasiveness. Each pillar also shows the same three-era arc, from feature engineering with SIFT, HOG and SentiBank, through deep learning with CNNs, C3D and LSTMs, to foundation models built on CLIP, BLIP-2 and LLaMA.

### Pillar 1: Perception understanding

This pillar investigates abstract concepts in the human perception of video content, ordered from the latent notion of aesthetics to the explicit modelling of user behaviour.

{{< figure src="pillar-perception.jpg" link="pillar-perception.jpg" alt="A filmstrip from FunQA of a person cutting a mask and a cat wearing it, with question boxes for intent (what is the person cutting the mask for), theme (possible semantic themes), virality (does this video have viral potential), user behaviour modelling (what could be the top comments), and an aesthetics example from AVA about a silhouette against the word DREAM." caption="Pillar 1. Intent, theme, virality and user behaviour modelling on a FunQA video, with aesthetics illustrated by an AVA image. Figure 6 of the survey." >}}

**Visual aesthetics** concerns human perception of beauty, which is often tied to the semantics of the scene. AVA, a large collection of images scored for aesthetics, photographic style and content, showed early that non-conventional styles receive highly variant scores, an instance of subjectivity. Video quality followed with KoNViD-1k, LSVQ and DIVIDE-3k, which disentangles aesthetic from technical quality. Methods moved from golden-ratio and rule-of-thirds features, through colourfulness and motion ratios, to CNNs and then to Q-Align, which maps quality to discrete levels a language model can name. On Q-Bench-Video, the best models sit well below human accuracy, and they struggle with open-ended queries and with distortions in AI-generated content.

**Intent** is the creator's motivation for recording a video, the user's information need in search, or the relation between semantic concepts. Action intent is tested by Oops!, built from YouTube fail compilations, where the tasks are to classify whether an action was intentional, localise the transition and anticipate the failure. IntentQA derives causal why and how questions from NExT-QA, and its CaVIR model combines situational context with GPT common sense. FunQA covers humour, magic and creativity. Humans shown randomly sampled frames mostly fail, which shows how much the sequence matters; GPT-4V is near random on the video while scoring highly on NExT-QA from captions alone, and every model collapses on timestamp localisation. Conversational intent is covered by MIntRec and its larger successor MIntRec 2.0, which adds multi-turn and out-of-scope dialogue. Multimodal input helps over text alone, and humans still beat a text-only ChatGPT by a wide margin given a handful of dialogue examples. Foundation models supply common sense here, but interpreting socially nuanced behaviour and dialogue remains hard, and video datasets are scarce.

**Semantic theme understanding** targets the central theme and deeper meaning of a video, complex enough that it cannot be inferred from a single image. Archivists have long used topical labels such as cultural identity, immigration and history. Advertisement datasets drive the recent work: Pitts Ads, annotated from the literal up to symbolism and atypical objects; Tencent AVS for themes, emotions, aesthetics and production style; MM-AU for topic, tone transition and social message, where zero-shot GPT-4 falls far behind the best supervised multimodal model; and AdsQA and VideoAds, discussed below. On social media, 3MASSIV labels philanthropy, pranks and romance, with reaction videos proving hardest.

**User behaviour modelling and virality** treats likes, dislikes and comments as a direct weak signal of how humans perceive content. Early work such as the CMU Viral Video dataset forecast the peak-view day from metadata with a modified HMM. Low-level visual features on their own fail. In the foundation-model era, fine-tuning a video language model to predict the like ratio and the top comments improves downstream topic, sentiment, persuasion and memorability recognition, and on the Global Popular Video Dataset a language model that generates and tests hypotheses about a video outperforms supervised baselines at telling a local hit from a global one. The open question is why a video gains popularity, not only whether it will.

### Pillar 2: Emotions and social signals

The second pillar covers emotional expression, its effect on the viewer, and social dynamics. Emotions are preconscious social expressions of feeling, influenced by culture. The theoretical scaffolding is Russell's circumplex model of valence and arousal, Kiesler's map of relationships on control and affiliation, and Pentland's social signal processing.

{{< figure src="pillar-emotions.jpg" link="pillar-emotions.jpg" alt="A filmstrip from Forrest Gump with question boxes: what is the relationship between Forrest and Jenny, what is the situation being shown, why is Jenny distressed, what emotion is likely to be felt while watching this scene, and a MovieGraphs-style example of two siblings with the question what does this image depict." caption="Pillar 2. Relationship, situation, displayed emotion and evoked emotion, illustrated with MovieGraphs. Figure 9 of the survey." >}}

**Affective analysis** studies affect and emotion both within the content and as induced in the recipient. Hanjalic and Xu's arousal and valence curves from motion, shot change and audio set the pattern; later work added events, scenes and objects as context, mapped action concepts to emotions (celebrating to joy, smoking to sadness), and used LIME to explain predictions on keyframe superpixels. Datasets span Jiang's Video Emotion and Ekman sets, VAAD's emotional adverbs, iMiGUE's micro-gestures, VEATIC's continuous valence and arousal with face and context, and Mazeika's VCE and V2V, which ask how content affects viewers rather than what happens in it. Foundation-model approaches such as Emotion-LLaMA and AffectGPT align per-modality encoders to a language model and currently lead on fine-grained emotion benchmarks. The survey calls for richer multimodal datasets that capture the interaction between body language, scene context, audio cues and facial emotion.

**Relationships** began with Siamese networks on face pairs following Kiesler's taxonomy, then moved to video with SRIV, the first video social relation dataset, where a loud voice signals an argument and a soft one a warm relationship. ViSR tracks characters across shots, PERR adds emotional relationships, and MovieGraphs provides a knowledge graph of emotions, relationships, motivations and interactions per clip. LVU adds relationships, speaking style, director, year, genre and like ratio for long videos. SocialGPT extracts relations zero-shot from images, and LLM prompting improves MovieGraphs results, though the survey notes a covariate shift: "opponent" in LLM training data means politics or sports, while opponents in films are defined by moral difference.

**Situation analysis** asks a system to read the room. Social-IQ posed multimodal questions about social situations; DeSIQ showed that incorrect answers clustered, exposing a shortcut that swapping distractors removes. Social Genome finds foundation models behind humans on implicit cues such as lip movement. Text-only studies show LLMs struggling with conflict resolution, violated social norms and private-information reasoning. Video memes are flagged as an underexplored testbed. Social intelligence, the survey argues, involves more than recognising emotions; it demands common-sense reasoning and an intuitive grasp of social dynamics.

### Pillar 3: Narrative and rhetorical analysis

The third pillar covers complex communicative intent, including indirect messaging through metaphor, symbolism and persuasive narrative technique.

{{< figure src="pillar-narrative.jpg" link="pillar-narrative.jpg" alt="A filmstrip from a glue advertisement in which a person fails to break an egg with a hammer and a chicken is revealed eating from a glue container, with question boxes for narrative, humour, persuasion and metaphor, plus a framing example of a politician holding a rainbow flag." caption="Pillar 3. Narrative, humour, persuasion and metaphor on a VMC advertisement, with framing illustrated separately. Figure 12 of the survey." >}}

**Visual narrative understanding** runs from MPII Movie Description and MovieBook, through MovieQA and DramaQA with its character-centric cognitive hierarchy, to MovieNet with genre, cinematic style, shot scale and story retrieval. Climax detection follows Freytag's pyramid using peaks in audio, optical flow and shot change. Two findings cut across this work. Text often beats video on movie question answering, and SF20K shows that movie titles alone are sufficient for high accuracy on LVU and MovieQA, a sign of data leakage rather than understanding. The field is moving from fact-based understanding to a comprehensive grasp of narrative, and needs cleaner benchmarks with less reliance on subtitles.

**Visual metaphors** in video were first collected by [Alnajjar et al.](https://aclanthology.org/2022.flp-1.4/), where text remained the strongest modality. VMC contributes a dataset of advertisement videos with metaphor captions and a captioning pipeline pretrained on synthetic data; caption scores remain low and models are judged to lack a deeper understanding. Image benchmarks such as V-FLUTE, MultiMET and MetaCLUE show VLMs performing well on literal content and poorly on metaphor, with hallucinations and unsound reasoning. Symbolic reasoning, explainability and a human in the loop are the stated directions.

**Humour, sarcasm and satire** follow incongruity theory. MUStARD was the first multimodal video sarcasm dataset, UR-FUNNY used TED talks with facial action units, MHD used sitcoms and fails on cultural references such as *Slumdog Millionaire* and on funny costumes, and WITS adds explanations but fails at identifying who is being mocked. ExFunTube captions everything to text before reasoning with an LLM, which loses temporal context and a great deal of nuance. The reliance of foundation models on text for reasoning creates a bottleneck and a modality gap.

**Persuasion** covers atypical objects such as an owl made of coffee, persuasive portraits of politicians read from face, gesture and scene, the Rallying a Crowd dataset where audio is the prime indicator, QPS on debate outcomes, and Paladin on techniques in political advertisements. On Paladin, models stay close to a random baseline: they detect cinematic style but not the overarching persuasive technique.

**Framing** splits into opinion and misinformation. POM and MOSI ground sentiment and subjectivity in speech features, and political bias work shows that the mere occurrence of particular objects is not enough, portrayal matters too. FakeSV fuses text, audio, video, comments and publisher for short-video misinformation, and still labels a police drill as a real incident. SNIFFER chains a vision encoder, Google Vision entity checks, web retrieval and an LLM judgment, an early example of foundation models acting as agents.

## Where do we stand?

The survey collects recent benchmarks that span the pillars and compares open and closed foundation models with human accuracy where the original studies report it. The picture is consistent: on every benchmark the best foundation model trails humans by a clear margin, and the margin is widest where the question is about persuasion and intent.

{{< figure src="model-human-comparison.png" link="model-human-comparison.png" alt="Bar chart of best model versus human accuracy on AdsQA, VideoAds, BlackSwanSuite and Q-Bench-Video. Humans lead on all four, with the widest gap on AdsQA." caption="Best-performing model against human accuracy. Gemini 2.5 refers to Gemini 2.5 Pro. Figure 16 of the survey." >}}

Three details from the underlying studies sharpen the picture. On AdsQA, the persuasion-strategy questions are the hardest for models and humans alike, and longer chain-of-thought reasoning degrades performance below the baseline, because advertisement reasoning does not follow if-A-then-B logic. On VideoAds, giving a model the audio track lifts its accuracy, and some open-source models beat GPT-4o. On BlackSwanSuite, forecasting what will happen is easy for models and humans alike; detecting and explaining the unexpected event is where the gap opens.

## Open challenges

The survey closes with a set of open challenges. The figures below come from the talk; the arguments come from the paper.

### Perception versus reasoning

Whether models fail first at perception or at reasoning is unresolved, with research supporting both sides. The survey's position is that correct perception is vital for reasoning: misidentifying the objects in an advertisement's metaphor changes its meaning entirely. The two are equally important and cannot be studied apart.

### Subjectivity, and metrics that respect it

Classification datasets finalise labels by majority vote, which discards the subjectivity of concepts like emotion, humour and intent. First steps include training with annotator context such as race and gender, and flagging subjective attributes ahead of classification. The goal is a model that emulates how a diverse group of humans would respond rather than collapsing to one output, treating subjectivity as a feature rather than noise. As outputs move to open-ended generation, n-gram metrics stop being sufficient, and LLM judges yield different scores for the same input. Metrics need adaptive penalties and room for several subjective answers.

### Cultural bias

Vision-language models show a Western cultural bias across objective and subjective tasks, performing better on Western images and perspectives than on East Asian ones, and cannot hold multiple cultural or historical perspectives at once. [Ananthram et al.](https://arxiv.org/abs/2406.11665) trace the cause to the language mix during LLM pre-training rather than the prompting language, and show that a multilingual fusion corpus alone does not repair it. These studies are still confined to images; extending them to video is open.

{{< figure src="cultural-bias.jpg" link="cultural-bias.jpg" alt="Diagram of a multilingual VLM asked objective and subjective questions about a temple image and an artwork, once through a Western-trained and once through an East Asian-trained pathway, with a table showing which answers Western and East Asian users accept." caption="Cultural bias in image understanding. From [Ananthram et al., *See It from My Perspective*](https://arxiv.org/abs/2406.11665) (2024)." >}}

### The modality gap

Datasets are multimodal by design, from MINE and UR-FUNNY to MUStARD and PERR, yet models often exploit shortcuts that bypass vision entirely and still score well, as DeSIQ demonstrated. The survey asks for architectures firmly grounded in vision, able to read facial expressions, body language and advertisement strategy beyond a company logo, and for tighter integration of vision, language, audio and knowledge instead of offloading everything to text.

### Hallucination

Foundation models often fail to recognise the intended entities at their time stamps, respond with high confidence, and let errors in low-level semantics propagate upwards. Abstract concepts are more susceptible because their meanings are implicit.

### Reasoning beyond chain of thought

Chain of thought benefits many tasks. It seldom improves recognition of abstract concepts and can hurt, because these concepts do not adhere to sequential if-A-then-B logic, and an early wrong assumption poisons every later step. The BlackSwanSuite ablation shows both faces of this: chain of thought helps a little when the model plays detective and hurts when it plays reporter. The survey points to reasoning in latent space and to a query-conditioned foundation model, inspired by mixture of experts, that selects modules for perception, emotion and long-term memory according to the question.

{{< figure src="chain-of-thought.jpg" link="chain-of-thought.jpg" alt="Top: a table from Black Swan with base and chain-of-thought results on detective and reporter tasks for LLaVA-Video and GPT-4o. Bottom: diagrams of chain-of-thought, tree-of-thought and graph-of-thought reasoning." caption="Chain of thought is not a universal fix. Table from [Chinchure et al., *Black Swan*](https://arxiv.org/abs/2412.05725) (CVPR 2025); reasoning topologies below." >}}

### Temporal grounding and frame sampling

Many abstract concepts, including visual metaphors in advertisements and narrative progression in films, are inherently temporal. Uniform frame sampling drops the fine detail that carries them, dense sampling is costly, and memory-based token compression is the promising middle ground.

### Data leakage

Scaling boosts benchmark scores but also contamination. GPT-4 with text alone matches VLMs on NExT-QA, and movie titles suffice on LVU and MovieQA. High scores achieved through memorisation may indicate minimal genuine progress. Shuffled colour channels and randomised captions are proposed as checks.

{{< figure src="other-challenges.jpg" link="other-challenges.jpg" alt="Three panels: an illustration of hallucination with confident wrong answers, a diagram of a foundation model trained on structured data, text, voice, 3D signals and images and adapted to many tasks, and a shortcut illustration of a folder taking a direct path." caption="Hallucination, the opacity of the foundation-model pipeline, and shortcut learning." >}}

### Benchmarks and models across levels of abstraction

Abstract concepts co-occur. A film's climax elicits stronger emotions, and grayscale shots in a political advertisement imply a candidate's poor performance. Datasets such as MOGaze and Paladin already annotate several at once. The survey asks for benchmarks with rich fine-grained annotation, models that reason over multiple levels of abstraction together, and evaluation that accounts for subjectivity.

### Generation from abstract prompts

The mirror problem is generation. Video models suffer from attribute-object binding failures, and given "don't judge a book by its cover" or "life is a roller coaster", SORA renders a book and a roller coaster. The models are stuck in literal interpretation. WordNet-based bridges and abstract-caption datasets are early attempts to give generators the same hierarchy that recognisers lack.

{{< figure src="metaphor-generation.jpg" link="metaphor-generation.jpg" alt="Two stills: a roller coaster against a blue sky, and an open book on a dark table." caption="Literal renderings of *life is a roller coaster* and *don't judge a book by its cover*." >}}

## Closing

The recurring pattern across the three pillars is a community closing several gaps at once: the semantic and affective gaps, and the gaps in intent, modality, common-sense reasoning, social understanding and narrative structure. Foundation models are the most promising route through all of them, provided they are trained to recognise abstract concepts across semantic levels, to account for subjectivity, and to reason over multiple dimensions of abstraction as one processing unit. That, the survey argues, is the next frontier in automatic video understanding.

Gowreesh Mago, Pascal Mettes and Stevan Rudinac, *Looking Beyond the Obvious: A Survey on Abstract Concept Recognition for Video Understanding*. [Open-access manuscript on arXiv](https://arxiv.org/abs/2508.20765) and [journal article in IJCV](https://doi.org/10.1007/s11263-026-02784-5). This work was supported by the UvA Data Science Centre as part of HAVA-Lab.
