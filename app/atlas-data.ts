export type Locale = "tr" | "en";
export type EvidenceLevel = "verified" | "observed" | "planned" | "unknown" | "simulation";
export type Surface = "dashboard" | "roadmap" | "labs" | "evidence" | "data-evaluation" | "journey";

export interface ContentRecord {
  id: string;
  locale: Locale;
  kind: "lesson" | "week" | "experiment" | "reference";
  slug: string;
  title: string;
  summary: string;
  body: string[];
  tags: string[];
  week?: number;
  status: string;
  evidence: EvidenceLevel;
  sourceHash: string;
  verifiedAt: string;
}

export interface WeekRecord {
  id: string;
  week: number;
  status: "completed" | "active" | "todo";
  sourceProgress: number;
  hours: number;
  title: string;
  purpose: string;
  deliverable: string;
  tasks: string[];
}

export interface LessonRecord extends ContentRecord {
  eyebrow: string;
  misconception: string;
  correction: string;
  decision: string;
  checks: string[];
}

export interface QuizQuestion {
  id: string;
  topic: string;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const ui = {
  tr: {
    skip: "İçeriğe geç",
    brand: "Unsloth Studio Learning",
    brandTag: "kanıt odaklı öğrenme atlası",
    nav: { dashboard: "Panel", roadmap: "12 Hafta", learn: "Öğren", labs: "Laboratuvar", evidence: "Kanıt", data: "Veri & Eval", journey: "Yolculuk" },
    language: "English",
    theme: "Temayı değiştir",
    sourceState: "Kaynak durumu",
    myProgress: "Benim ilerlemem",
    complete: "Tamamlandı",
    active: "Aktif",
    planned: "Planlandı",
    continue: "Devam et",
    start: "Öğrenmeye başla",
    evidence: "Kanıt seviyesi",
    verified: "Doğrulandı",
    observed: "Gözlendi",
    unknown: "Bilinmiyor",
    simulation: "Öğretici simülasyon",
    reset: "Cihaz ilerlemesini sıfırla",
    resetConfirm: "Bu cihazdaki ilerlemeyi sıfırlamak istiyor musun?",
    markDone: "Bu dersi tamamla",
    markedDone: "Tamamlandı olarak işaretlendi",
    quiz: "Karma test",
    submit: "Cevabı kontrol et",
    next: "Sonraki soru",
    result: "Test sonucu",
    retry: "Tekrar dene",
    search: "Atlas içinde ara",
    noResults: "Bu aramayla eşleşen içerik bulunamadı.",
    localOnly: "İlerleme yalnızca bu tarayıcıda tutulur.",
  },
  en: {
    skip: "Skip to content",
    brand: "Unsloth Studio Learning",
    brandTag: "evidence-aware learning atlas",
    nav: { dashboard: "Dashboard", roadmap: "12 Weeks", learn: "Learn", labs: "Labs", evidence: "Evidence", data: "Data & Eval", journey: "Journey" },
    language: "Türkçe",
    theme: "Change theme",
    sourceState: "Source state",
    myProgress: "My progress",
    complete: "Complete",
    active: "Active",
    planned: "Planned",
    continue: "Continue",
    start: "Start learning",
    evidence: "Evidence level",
    verified: "Verified",
    observed: "Observed",
    unknown: "Unknown",
    simulation: "Teaching simulation",
    reset: "Reset device progress",
    resetConfirm: "Reset progress stored on this device?",
    markDone: "Complete this lesson",
    markedDone: "Marked as complete",
    quiz: "Mixed test",
    submit: "Check answer",
    next: "Next question",
    result: "Test result",
    retry: "Try again",
    search: "Search the atlas",
    noResults: "No content matches this search.",
    localOnly: "Progress is stored only in this browser.",
  },
} as const;

export const weeks: Record<Locale, WeekRecord[]> = {
  tr: [
    { id: "week-01", week: 1, status: "completed", sourceProgress: 100, hours: 7, title: "Eğitim Temelleri", purpose: "Model, veri ve eğitim katmanlarını birbirinden ayırarak doğru karar dilini kur.", deliverable: "Kavram kontrolü ve 7 günlük tekrar planı", tasks: ["Base, Instruct ve Reasoning", "Token, context ve attention", "LoRA/QLoRA", "Loss ve genelleme"] },
    { id: "week-02", week: 2, status: "active", sourceProgress: 45, hours: 6, title: "Kurulum ve Doğrulama", purpose: "CachyOS üzerinde GPU'yu gerçekten kullanan, kayıtlı ve yeniden üretilebilir bir Studio ortamı doğrula.", deliverable: "Çalışan Studio, doğrulanmış GPU ve token ölçümü", tasks: ["NVIDIA/CUDA ortam tablosu", "4-bit yolu", "GPU inference kanıtı", "Türkçe token ölçümü"] },
    { id: "week-03", week: 3, status: "todo", sourceProgress: 0, hours: 6, title: "Studio İş Akışı", purpose: "Model keşfinden adapter ve export'a kadar Studio'nun bütün ana bölümlerini tanı.", deliverable: "Baştan sona Studio kuru provası", tasks: ["Model ve dataset", "Data Recipes kalite kontrolü", "Checkpoint", "Export seçenekleri"] },
    { id: "week-04", week: 4, status: "todo", sourceProgress: 0, hours: 7, title: "İlk Kontrollü Eğitim", purpose: "Kalite hedeflemeden eğitim pipeline'ının baştan sona çalıştığını kanıtla.", deliverable: "0.8B smoke test", tasks: ["50–100 adım", "Peak VRAM", "Adapter reload", "10 sabit prompt"] },
    { id: "week-05", week: 5, status: "todo", sourceProgress: 0, hours: 8, title: "Dataset Mühendisliği", purpose: "Train, validation ve bağımsız test ayrımı doğru yapılmış ilk dataset sürümünü hazırla.", deliverable: "Dataset v1 ve bağımsız test seti", tasks: ["Duplicate/leakage", "Şema tutarlılığı", "Anonimleştirme", "Chat template"] },
    { id: "week-06", week: 6, status: "todo", sourceProgress: 0, hours: 8, title: "İlk Gerçek QLoRA", purpose: "4B Instruct model üzerinde ölçülebilir ilk domain adapter'ını üret.", deliverable: "4B domain adapter", tasks: ["4-bit başlangıç", "Validation loss", "Base/adapted/export", "Süre ve token/s"] },
    { id: "week-07", week: 7, status: "todo", sourceProgress: 0, hours: 8, title: "Kontrollü Deneyler", purpose: "Her koşuda yalnızca bir değişkeni değiştirerek neden-sonuç ilişkisi kur.", deliverable: "Parametre karşılaştırma raporu", tasks: ["Rank 8/16", "LR 1e-4/2e-4", "Epoch 1/3", "Context 1024/2048"] },
    { id: "week-08", week: 8, status: "todo", sourceProgress: 0, hours: 8, title: "Değerlendirme Sistemi", purpose: "Model kalitesini loss'tan bağımsız, tekrar çalıştırılabilir bir benchmark ile ölç.", deliverable: "100 soruluk benchmark ve skor kartı", tasks: ["Domain", "Format", "Güvenlik", "Retention"] },
    { id: "week-09", week: 9, status: "todo", sourceProgress: 0, hours: 8, title: "9B ve 14B Ölçekleme", purpose: "Aynı veri ve benchmark ile ölçeğin kalite, hız ve VRAM etkisini ölç.", deliverable: "4B/9B/14B ölçek raporu", tasks: ["Micro batch 1", "OOM sırası", "Token/s", "Sistem RAM darboğazı"] },
    { id: "week-10", week: 10, status: "todo", sourceProgress: 0, hours: 10, title: "Endüstriyel Capstone", purpose: "Güvenli, yapılandırılmış ve ölçülebilir bir Condition Monitoring adapter'ı tasarla.", deliverable: "Industrial Condition Monitoring Adapter", tasks: ["2.000–5.000 örnek", "Eksik bilgi", "Güvenlik notu", "JSON şeması"] },
    { id: "week-11", week: 11, status: "todo", sourceProgress: 0, hours: 8, title: "GRPO ve İleri Eğitim", purpose: "SFT hattı güvenilir olduktan sonra otomatik doğrulanabilir bir reward deneyi yap.", deliverable: "Küçük model GRPO deneyi", tasks: ["Reward hacking", "KL divergence", "Length bias", "SFT/GRPO karşılaştırma"] },
    { id: "week-12", week: 12, status: "todo", sourceProgress: 0, hours: 8, title: "Export ve Yerel Kullanım", purpose: "Adapter, merged model ve GGUF biçimlerini aynı benchmark ile karşılaştır.", deliverable: "Adapter, GGUF ve API karşılaştırması", tasks: ["Safetensors", "GGUF Q4/Q5/Q8", "OpenAI-compatible API", "Ollama/LM Studio"] },
  ],
  en: [
    { id: "week-01", week: 1, status: "completed", sourceProgress: 100, hours: 7, title: "Training Foundations", purpose: "Build a precise decision vocabulary by separating model, data, and training layers.", deliverable: "Concept check and seven-day review plan", tasks: ["Base, Instruct, and Reasoning", "Tokens, context, and attention", "LoRA/QLoRA", "Loss and generalization"] },
    { id: "week-02", week: 2, status: "active", sourceProgress: 45, hours: 6, title: "Setup and Verification", purpose: "Verify a reproducible Studio environment on CachyOS that genuinely uses the GPU.", deliverable: "Working Studio, verified GPU, token measurement", tasks: ["NVIDIA/CUDA environment table", "4-bit path", "GPU inference evidence", "Turkish token measurement"] },
    { id: "week-03", week: 3, status: "todo", sourceProgress: 0, hours: 6, title: "Studio Workflow", purpose: "Learn every main Studio surface from model discovery through adapter and export.", deliverable: "End-to-end Studio dry run", tasks: ["Model and dataset", "Data Recipes QA", "Checkpoint", "Export options"] },
    { id: "week-04", week: 4, status: "todo", sourceProgress: 0, hours: 7, title: "First Controlled Training", purpose: "Prove the complete training pipeline without aiming for model quality.", deliverable: "0.8B smoke test", tasks: ["50–100 steps", "Peak VRAM", "Adapter reload", "10 fixed prompts"] },
    { id: "week-05", week: 5, status: "todo", sourceProgress: 0, hours: 8, title: "Dataset Engineering", purpose: "Prepare the first dataset version with correct train, validation, and independent test splits.", deliverable: "Dataset v1 and independent test set", tasks: ["Duplicates/leakage", "Schema consistency", "Anonymization", "Chat template"] },
    { id: "week-06", week: 6, status: "todo", sourceProgress: 0, hours: 8, title: "First Real QLoRA", purpose: "Produce the first measurable domain adapter on a 4B Instruct model.", deliverable: "4B domain adapter", tasks: ["4-bit baseline", "Validation loss", "Base/adapted/export", "Duration and tokens/s"] },
    { id: "week-07", week: 7, status: "todo", sourceProgress: 0, hours: 8, title: "Controlled Experiments", purpose: "Change only one variable per run to establish causal evidence.", deliverable: "Parameter comparison report", tasks: ["Rank 8/16", "LR 1e-4/2e-4", "Epoch 1/3", "Context 1024/2048"] },
    { id: "week-08", week: 8, status: "todo", sourceProgress: 0, hours: 8, title: "Evaluation System", purpose: "Measure quality independently of loss with a repeatable benchmark.", deliverable: "100-question benchmark and scorecard", tasks: ["Domain", "Format", "Safety", "Retention"] },
    { id: "week-09", week: 9, status: "todo", sourceProgress: 0, hours: 8, title: "Scaling to 9B and 14B", purpose: "Measure how model scale changes quality, speed, and VRAM on the same data and benchmark.", deliverable: "4B/9B/14B scaling report", tasks: ["Micro batch 1", "OOM sequence", "Tokens/s", "System RAM bottleneck"] },
    { id: "week-10", week: 10, status: "todo", sourceProgress: 0, hours: 10, title: "Industrial Capstone", purpose: "Design a safe, structured, and measurable Condition Monitoring adapter.", deliverable: "Industrial Condition Monitoring Adapter", tasks: ["2,000–5,000 examples", "Missing information", "Safety note", "JSON schema"] },
    { id: "week-11", week: 11, status: "todo", sourceProgress: 0, hours: 8, title: "GRPO and Advanced Training", purpose: "Run an automatically verifiable reward experiment only after the SFT pipeline is reliable.", deliverable: "Small-model GRPO experiment", tasks: ["Reward hacking", "KL divergence", "Length bias", "SFT/GRPO comparison"] },
    { id: "week-12", week: 12, status: "todo", sourceProgress: 0, hours: 8, title: "Export and Local Use", purpose: "Compare adapters, merged models, and GGUF formats on the same benchmark.", deliverable: "Adapter, GGUF, and API comparison", tasks: ["Safetensors", "GGUF Q4/Q5/Q8", "OpenAI-compatible API", "Ollama/LM Studio"] },
  ],
};

const lessonHash = "vault-2026-08-08";
export const lessons: Record<Locale, LessonRecord[]> = {
  tr: [
    { id: "models", locale: "tr", kind: "lesson", slug: "models", eyebrow: "01 · MODEL SEÇİMİ", title: "Base, Instruct ve Reasoning", summary: "Model etiketi veri miktarına göre değil, başlangıç davranışı ve hedeflenen yetenek farkına göre seçilir.", body: ["Base model ön-eğitim görmüş ham başlangıçtır; talimat takip etmek zorunda değildir. Instruct model, sohbet ve talimat davranışıyla hizalanmıştır. Reasoning ise ayrı bir eş kategori olmak zorunda değildir: reasoning özellikli bir Instruct model olabilir.", "Dar, yapılandırılmış bir domain adapter'ı için Instruct varsayılan başlangıçtır. Bilgi sık değişiyorsa ağırlıklara yazmak yerine RAG; kesin biçim gerekiyorsa constrained decoding kullanılır."], tags: ["model-selection", "sft", "rag"], status: "completed", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "300 satırdan azsa Instruct, 1.000 satırdan fazlaysa Base seçilir.", correction: "Evrensel satır eşiği yoktur; görev, veri kalitesi, token miktarı ve başlangıç yetenekleri birlikte değerlendirilir.", decision: "Dar ve formatlı asistan görevi → önce Instruct checkpoint.", checks: ["ShareGPT veri şemasıdır; ChatML bir render şablonudur.", "Template uygulamak Base modeli Instruct yapmaz.", "Reasoning yalnızca RL ile kazanılmaz."] },
    { id: "tokens", locale: "tr", kind: "lesson", slug: "tokens", eyebrow: "02 · BAĞLAM", title: "Token, Context ve Attention", summary: "Token bütçesi, sabit ağırlıklar ve geçici attention durumunu aynı zihinsel modelde birleştir.", body: ["Context; sistem mesajı, template, kullanıcı, RAG içeriği ve cevap rezervinin toplam token bütçesidir. Token ID ve parçalanma modele özgüdür; Türkçe maliyet tahmin edilmez, hedef tokenizer ile ölçülür.", "Inference sırasında WQ/WK/WV sabittir. Q/K/V vektörleri ve attention skorları girdiye göre değişir; KV cache geçmiş K/V aktivasyonlarını geçici tutar."], tags: ["tokenizer", "attention", "kv-cache"], status: "active", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "Context iki katına çıkınca toplam VRAM kesin dört katına çıkar.", correction: "Klasik attention işi yaklaşık dört kat artar; sabit ağırlıklar ve çalışma zamanı nedeniyle toplam VRAM aynı oranda artmak zorunda değildir.", decision: "Gerçek uzunluk dağılımını ölç; önce 1024–2048 ile güvenli baseline kur.", checks: ["Pozisyon genellikle ayrı bir token değildir.", "Value model ağırlığını güncellemez.", "KV cache kalıcı öğrenme değildir."] },
    { id: "lora", locale: "tr", kind: "lesson", slug: "lora", eyebrow: "03 · ADAPTER", title: "LoRA ve QLoRA", summary: "Donmuş tabana küçük bir düşük-rank düzeltme ekleyerek 16 GB sınıfında ölçülebilir adaptasyon yap.", body: ["LoRA, W' = W + scale × BA biçiminde yalnızca A ve B adaptörlerini eğitir. B=0 başlangıcı sayesinde ilk adım taban model davranışından başlar.", "QLoRA donmuş tabanı 4-bit biçimde saklar; adaptör ve kritik hesaplar daha yüksek hassasiyette kalabilir. Bu seçenekleri genişletir, belirli bir modelin 16 GB'a sığacağını garanti etmez."], tags: ["lora", "qlora", "nf4"], status: "completed", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "QLoRA bütün modeli 4-bit integer olarak eğitir.", correction: "4-bit olan donmuş tabandır; küçük LoRA adaptörleri eğitilir ve hesaplama hassasiyetleri ayrı ele alınır.", decision: "16 GB'ta önce QLoRA; kalite kararı bağımsız benchmark ile.", checks: ["Base ağırlıklar donuktur.", "Adapter geri dönüşlüdür.", "Quantization chat-template hatasını çözmez."] },
    { id: "rank", locale: "tr", kind: "lesson", slug: "rank", eyebrow: "04 · KAPASİTE", title: "Rank, Alpha ve Target Modules", summary: "Kapasite, ölçek ve etki alanını birbirinden ayır; tek değişkenli deney yap.", body: ["Rank r adaptör kapasitesini ve r × (d_in + d_out) parametre bütçesini belirler. Alpha standart LoRA'da alpha/r, rsLoRA'da alpha/√r ölçeğini etkiler.", "Target modules, adaptörün attention ve MLP içindeki gerçek matrislere nereye ekleneceğini belirler. Modül adları mimariye özgüdür ve eğitim öncesinde modelden doğrulanmalıdır."], tags: ["rank", "alpha", "target-modules"], status: "completed", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "Aynı alpha/r, aynı adaptör kapasitesi demektir.", correction: "Aynı etkin ölçek korunabilir; daha yüksek rank yine daha çok parametre ve kapasite taşır.", decision: "r=8/alpha=8 baseline; kapasite yetersizse diğer her şeyi sabit tutup r=16/alpha=16 dene.", checks: ["Alpha learning rate değildir.", "all-linear mimariye göre doğrulanmalıdır.", "Config kabulü adaptörün doğru eklendiğini kanıtlamaz."] },
    { id: "steps", locale: "tr", kind: "lesson", slug: "steps", eyebrow: "05 · EĞİTİM MEKANİĞİ", title: "Epoch, Step ve Gradient Accumulation", summary: "Micro-step ile gerçek ağırlık güncellemesini ayır; OOM müdahalesini hesapla.", body: ["Micro-step bir micro batch için forward/loss/backward geçişidir. Optimizer step, accumulation tamamlandıktan sonra birikmiş gradientlerle ağırlığı bir kez günceller.", "Effective batch = micro batch × accumulation × GPU sayısı. OOM'da micro batch veya sequence length düşürülür; hedef effective batch korunacaksa accumulation artırılır."], tags: ["batch", "gradient", "oom"], status: "completed", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "Accumulation 8 ise ağırlık sekiz kez güncellenir.", correction: "Sekiz backward yapılır, ardından bir optimizer step ile ağırlık bir kez güncellenir.", decision: "Önce VRAM'e sığan micro batch'i bul; step sayılarını optimizer step olarak kaydet.", checks: ["Epoch doğrudan güncelleme değildir.", "Gradient kopyaları accumulation ile çoğalmaz.", "Scheduler optimizer step ile ilerler."] },
    { id: "loss", locale: "tr", kind: "lesson", slug: "loss", eyebrow: "06 · GENELLEME", title: "Loss, Overfitting ve Forgetting", summary: "Loss'u iş kalitesi sanma; domain, format, güvenlik ve retention metriklerini birlikte kullan.", body: ["Training loss optimize edilen hedefe uyumu, validation loss görülmemiş split üzerindeki genellemeyi izler. Train düşerken validation yükseliyorsa overfitting araştırılır.", "Catastrophic forgetting farklıdır: yeni domain metriği yükselirken eski/genel yetenek geriler. LoRA tabanı korur ama aktif adapter davranışsal girişim oluşturabilir."], tags: ["loss", "overfitting", "retention"], status: "completed", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "Daha düşük validation loss her zaman daha iyi üretim modelidir.", correction: "Loss optimize edilen token hedefidir; JSON geçerliliği, görev doğruluğu ve güvenlik ayrı ölçülür.", decision: "Checkpoint'i validation loss + görev metriği + retention eşiğiyle seç.", checks: ["Düşük loss kötü görev metriğiyle birlikte mümkün.", "Overfitting ve forgetting aynı şey değildir.", "Adapter kapatınca düzelme davranışsal girişime işaret eder."] },
    { id: "templates", locale: "tr", kind: "lesson", slug: "templates", eyebrow: "07 · PROTOKOL", title: "Chat Template Uyumsuzluğu", summary: "Aynı anlamsal dataset, her modele aynı render edilmiş token dizisini vermek değildir.", body: ["role/content kayıtlarını modelden bağımsız sakla; her model için kendi tokenizer ve chat template'iyle yeniden render et. Eğitim, evaluation ve inference boyunca aynı doğrulanmış template'i koru.", "Response-only maskelemede assistant başlangıç ve bitiş işaretleri gerçek render ile eşleşmezse cevaplar loss dışında kalabilir veya prompt yanlışlıkla eğitime katılabilir."], tags: ["chat-template", "masking", "eos"], status: "completed", evidence: "verified", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "QLoRA yanlış template'i adaptasyon sırasında düzeltir.", correction: "QLoRA bellek ve optimizasyon yoludur; yanlış kontrol tokenlarını veya mask sınırlarını onarmaz.", decision: "En az bir render edilmiş örnekte BOS/EOS ve rol sınırlarını elle incele.", checks: ["Base'de öğrenme yükü, Instruct'ta çatışma riski ayrıdır.", "ShareGPT ve ChatML aynı katman değildir.", "Stop davranışı inference'ta da aynı kalmalıdır."] },
    { id: "evaluation", locale: "tr", kind: "lesson", slug: "evaluation", eyebrow: "08 · KANIT", title: "Dataset ve Değerlendirme Disiplini", summary: "Bağımsız test, sabit şema ve güvenlik örnekleri olmadan kalite iddiası üretme.", body: ["Önerilen veri karışımı: %55 standart, %10 farklı ifade, %15 eksik bilgi, %10 negatif ve %10 eskale örneği. Test seti eğitimden farklı ekipman veya kaynaktan dondurulur.", "100 soruluk benchmark domain doğruluğu, format, güvenlik, belirsizlik ve genel yetenek korunumunu ağırlıklı ölçer. Eğitim verisini evaluation diye yeniden kullanmak genelleme kanıtı değildir."], tags: ["dataset", "evaluation", "safety"], status: "planned", evidence: "planned", sourceHash: lessonHash, verifiedAt: "2026-08-10", misconception: "Train split'teki loss, bağımsız kalite ölçümüdür.", correction: "Ayrı validation ve test seti gerekir; loss gerçek iş hedefini tek başına temsil etmez.", decision: "Benchmark'ı eğitimden önce dondur ve base/adapted modeli aynı üretim ayarlarıyla ölç.", checks: ["Leakage kontrolü zorunludur.", "Geçerli JSON doğru içerik demek değildir.", "Güvenlik skoru düşerse adapter kabul edilmez."] },
  ],
  en: [],
};

lessons.en = lessons.tr.map((item, index) => {
  const english = [
    { eyebrow: "01 · MODEL CHOICE", title: "Base, Instruct, and Reasoning", summary: "Choose a model by its starting behavior and the capability gap—not by a fixed row count.", body: ["A Base model is a pretrained starting point and is not required to follow instructions. An Instruct model has already been aligned for conversation and instruction following. Reasoning is not always a mutually exclusive class: a model can be both reasoning-capable and instruct-tuned.", "For a narrow, structured domain adapter, Instruct is the default. Use RAG for frequently changing knowledge and constrained decoding when output shape must be guaranteed."], misconception: "Use Instruct below 300 rows and Base above 1,000 rows.", correction: "There is no universal row threshold; task, quality, token volume, and starting capabilities must be evaluated together.", decision: "Narrow, structured assistant task → start from an Instruct checkpoint.", checks: ["ShareGPT is a data schema; ChatML is a rendering template.", "Applying a template does not turn Base into Instruct.", "Reasoning is not learned only through RL."] },
    { eyebrow: "02 · CONTEXT", title: "Tokens, Context, and Attention", summary: "Unify token budgets, fixed weights, and temporary attention state in one mental model.", body: ["Context is the total token budget for system text, template, user input, RAG content, and response reserve. Token IDs and segmentation are model-specific; Turkish cost must be measured with the target tokenizer.", "During inference WQ/WK/WV stay fixed. Q/K/V vectors and attention scores depend on the input; KV cache temporarily stores past K/V activations."], misconception: "Doubling context always quadruples total VRAM.", correction: "Classic attention work grows roughly 4×, but fixed weights and runtime details mean total VRAM need not grow at the same rate.", decision: "Measure the real length distribution; establish a safe 1024–2048 baseline first.", checks: ["Position is usually not a separate token.", "Value does not update model weights.", "KV cache is not permanent learning."] },
    { eyebrow: "03 · ADAPTER", title: "LoRA and QLoRA", summary: "Adapt a frozen base with a low-rank update that fits measurable work into the 16 GB class.", body: ["LoRA trains only A and B adapters in W' = W + scale × BA. Initializing B at zero starts from the base model's behavior.", "QLoRA stores the frozen base in 4-bit form while adapters and critical computation can use higher precision. It expands the feasible space but never guarantees a specific model fits in 16 GB."], misconception: "QLoRA trains the entire model as 4-bit integers.", correction: "The frozen base is 4-bit; small LoRA adapters are trained and compute precision is handled separately.", decision: "On 16 GB, start with QLoRA; decide quality with an independent benchmark.", checks: ["Base weights stay frozen.", "Adapters are reversible.", "Quantization does not repair a chat-template error."] },
    { eyebrow: "04 · CAPACITY", title: "Rank, Alpha, and Target Modules", summary: "Separate capacity, scale, and intervention location; change one variable at a time.", body: ["Rank r determines adapter capacity and the r × (d_in + d_out) parameter budget. Alpha controls alpha/r in standard LoRA and alpha/√r in rsLoRA.", "Target modules decide which real attention and MLP matrices receive adapters. Names are architecture-specific and must be verified on the model."], misconception: "The same alpha/r means the same adapter capacity.", correction: "Effective scale may match while a higher rank still carries more parameters and capacity.", decision: "Start at r=8/alpha=8; if capacity is insufficient, hold everything else fixed and test r=16/alpha=16.", checks: ["Alpha is not learning rate.", "all-linear must be verified against the architecture.", "An accepted config does not prove adapters were attached correctly."] },
    { eyebrow: "05 · TRAINING MECHANICS", title: "Epochs, Steps, and Gradient Accumulation", summary: "Separate micro-steps from real weight updates and calculate the correct OOM response.", body: ["A micro-step is one forward/loss/backward pass for a micro batch. One optimizer step updates weights after accumulation completes.", "Effective batch = micro batch × accumulation × GPU count. For OOM, reduce micro batch or sequence length; increase accumulation if the target effective batch must be preserved."], misconception: "Accumulation 8 means the weights update eight times.", correction: "Eight backward passes accumulate gradients, then one optimizer step updates weights once.", decision: "Find the largest safe micro batch first; record step counts as optimizer steps.", checks: ["An epoch is not itself an update.", "Gradient buffers do not multiply with accumulation.", "The scheduler advances with optimizer steps."] },
    { eyebrow: "06 · GENERALIZATION", title: "Loss, Overfitting, and Forgetting", summary: "Do not confuse loss with business quality; combine domain, format, safety, and retention metrics.", body: ["Training loss tracks fit to the optimized target; validation loss tracks generalization on an unseen split. Falling train loss with rising validation loss is an overfitting signal.", "Catastrophic forgetting is different: the new domain improves while prior/general ability declines. LoRA preserves the base but an active adapter can still create behavioral interference."], misconception: "Lower validation loss always means the better production model.", correction: "Loss measures the token objective; JSON validity, task accuracy, and safety require separate metrics.", decision: "Select checkpoints with validation loss + task metric + retention threshold.", checks: ["Low loss can coexist with poor task metrics.", "Overfitting and forgetting are different failures.", "Recovery when disabling the adapter indicates behavioral interference."] },
    { eyebrow: "07 · PROTOCOL", title: "Chat Template Mismatch", summary: "The same semantic dataset does not mean forcing the same rendered token sequence on every model.", body: ["Store role/content records independently, then render with each model's own tokenizer and chat template. Preserve one validated template through training, evaluation, and inference.", "If response-only masking delimiters do not match the real rendering, assistant answers can fall outside the loss or prompt tokens can be trained accidentally."], misconception: "QLoRA repairs the wrong template while adapting.", correction: "QLoRA changes memory and optimization; it cannot fix incorrect control tokens or mask boundaries.", decision: "Inspect BOS/EOS and role boundaries in at least one rendered example.", checks: ["Base learning load and Instruct conflict risk are separate.", "ShareGPT and ChatML live at different layers.", "Inference must retain the same stop behavior."] },
    { eyebrow: "08 · EVIDENCE", title: "Dataset and Evaluation Discipline", summary: "Do not claim quality without an independent test set, stable schema, and safety examples.", body: ["Target mix: 55% standard, 10% paraphrase, 15% missing information, 10% negative, and 10% escalation examples. Freeze a test set from a different asset or source.", "A 100-question benchmark weighs domain accuracy, format, safety, uncertainty, and general ability retention. Reusing training data for evaluation is not generalization evidence."], misconception: "Loss on the train split is independent quality evidence.", correction: "Separate validation and test sets are required; loss alone does not represent the real objective.", decision: "Freeze the benchmark before training and test base/adapted models with identical generation settings.", checks: ["Leakage checks are mandatory.", "Valid JSON does not imply correct content.", "Reject an adapter if its safety score declines."] },
  ][index];
  return { ...item, ...english, locale: "en" as const };
});

const quizTr: QuizQuestion[] = [
  { id: "q01", topic: "models", prompt: "Dar ve yapılandırılmış bir domain asistanı için en savunulabilir başlangıç hangisidir?", options: ["Instruct checkpoint", "Her zaman Base", "Her zaman Reasoning", "Satır sayısına göre otomatik seçim"], answer: 0, explanation: "Instruct, talimat ve sohbet davranışını zaten taşır; dar adaptasyon için daha düşük öğrenme yükü sunar." },
  { id: "q02", topic: "models", prompt: "ShareGPT ve ChatML arasındaki doğru ayrım nedir?", options: ["İkisi aynı tokenizer", "ShareGPT veri şeması, ChatML render şablonu", "ChatML model ağırlığı", "ShareGPT quantization"], answer: 1, explanation: "Biri kaydı saklama biçimi, diğeri mesajların token dizisine serileştirilme protokolüdür." },
  { id: "q03", topic: "tokens", prompt: "Inference sırasında hangisi sabit kalır?", options: ["Attention skorları", "Q/K/V vektörleri", "WQ/WK/WV ağırlıkları", "KV cache uzunluğu"], answer: 2, explanation: "Model ağırlıkları sabittir; aktivasyonlar ve attention skorları bağlama göre değişir." },
  { id: "q04", topic: "tokens", prompt: "Context bütçesine hangisi dahildir?", options: ["Yalnız kullanıcı girdisi", "Yalnız cevap", "Sistem + template + girdi + RAG + cevap", "Model parametreleri"], answer: 2, explanation: "Context, modelin aynı anda koşullandığı tüm token konumlarının toplamıdır." },
  { id: "q05", topic: "lora", prompt: "QLoRA'da eğitilen temel parça nedir?", options: ["Tüm 4-bit base ağırlıkları", "LoRA adaptörleri", "Tokenizer sözlüğü", "KV cache"], answer: 1, explanation: "Donmuş base 4-bit tutulur; küçük A/B adaptörleri eğitilir." },
  { id: "q06", topic: "lora", prompt: "QLoRA neyi garanti etmez?", options: ["Base'in donuk kalmasını", "Adapter'ın küçük olmasını", "Belirli ayarın 16 GB'a sığmasını", "4-bit base kullanımını"], answer: 2, explanation: "Aktivasyon, context, batch ve çalışma zamanı gerçek bellek sınırını belirler." },
  { id: "q07", topic: "rank", prompt: "Rank iki katına çıkarsa aynı hedef matrislerde ne olur?", options: ["Parametre sabit", "Parametre yaklaşık iki kat", "Alpha sıfırlanır", "Base çözülür"], answer: 1, explanation: "LoRA parametreleri r × (d_in + d_out) ile yaklaşık doğrusal ölçeklenir." },
  { id: "q08", topic: "rank", prompt: "Standart LoRA ölçeği hangisidir?", options: ["r/alpha", "alpha/r", "alpha×r", "alpha/√r"], answer: 1, explanation: "alpha/√r rsLoRA ölçeğidir; standart LoRA alpha/r kullanır." },
  { id: "q09", topic: "steps", prompt: "micro=2, accumulation=8, GPU=1 için effective batch kaçtır?", options: ["2", "8", "10", "16"], answer: 3, explanation: "2 × 8 × 1 = 16." },
  { id: "q10", topic: "steps", prompt: "Accumulation 8 ne anlama gelir?", options: ["8 optimizer update", "8 backward + 1 optimizer update", "8 modeli bellekte tutmak", "8 epoch"], answer: 1, explanation: "Gradientler sekiz micro-step boyunca birikir, sonra ağırlık bir kez güncellenir." },
  { id: "q11", topic: "steps", prompt: "Aktivasyon kaynaklı OOM'da ilk yön hangisidir?", options: ["Micro batch artır", "Context veya micro batch düşür", "Rank artır", "Accumulation sıfırla"], answer: 1, explanation: "Tek geçişte tutulan aktivasyon yükü sequence ve micro batch ile düşürülür." },
  { id: "q12", topic: "loss", prompt: "Train loss düşer, validation loss yükselirse ilk teşhis nedir?", options: ["Sağlıklı öğrenme", "Overfitting", "Kesin forgetting", "Daha fazla epoch gerekir"], answer: 1, explanation: "Train–validation ayrışması klasik overfitting sinyalidir." },
  { id: "q13", topic: "loss", prompt: "Domain artar, genel benchmark düşerse ne araştırılır?", options: ["Padding", "Forgetting veya adapter girişimi", "Tokenizer hızı", "Yalnız OOM"], answer: 1, explanation: "Yeni yetenek artarken eski/genel yetenek geriliyorsa retention problemi vardır." },
  { id: "q14", topic: "loss", prompt: "Düşük validation loss neyi tek başına kanıtlamaz?", options: ["Optimize edilen hedefe uyumu", "Üretim kalitesini", "Checkpoint karşılaştırmasını", "Loss hesabını"], answer: 1, explanation: "Görev doğruluğu, format ve güvenlik ayrı metriklerdir." },
  { id: "q15", topic: "templates", prompt: "İki model adil karşılaştırılırken ne sabit tutulur?", options: ["Yanlış render edilmiş tokenlar", "Semantik kayıtlar", "Her modelin tokenizer ID'leri", "Özel token sözlüğü"], answer: 1, explanation: "İçerik sabit, render her modelin doğal template'ine özeldir." },
  { id: "q16", topic: "templates", prompt: "Response-only mask yanlış delimiter ararsa ne olabilir?", options: ["Cevap loss dışında kalabilir", "GPU büyür", "Base 4-bit olur", "Dataset split oluşur"], answer: 0, explanation: "Gerçek assistant sınırı bulunamazsa labels yanlış maskelenir." },
  { id: "q17", topic: "evaluation", prompt: "Train split'i evaluation olarak kullanmak neden yanıltıcıdır?", options: ["Çok yavaş", "Görülmemiş veri değildir", "JSON üretemez", "Adapter kaydolmaz"], answer: 1, explanation: "Genelleme, gradient güncellemesine girmemiş ayrı veri üzerinde ölçülür." },
  { id: "q18", topic: "evaluation", prompt: "Eksik bilgi örneklerinin temel amacı nedir?", options: ["Cevabı uzatmak", "Uydurmayı azaltmak", "Loss'u sıfırlamak", "Rank'i artırmak"], answer: 1, explanation: "Modelin veri yetersizliğini belirtme refleksi güvenlik için kritiktir." },
  { id: "q19", topic: "evaluation", prompt: "Geçerli JSON neyi garanti eder?", options: ["Doğru içeriği", "Yalnız yapı geçerliliğini", "Kaynak bağlılığını", "Güvenli eylemi"], answer: 1, explanation: "Şema biçimi sınırlar; bilgi doğruluğu ve güvenlik ayrıca test edilir." },
  { id: "q20", topic: "evaluation", prompt: "Vault'taki Qwen3 4B koşusunun doğru sonucu nedir?", options: ["Fine-tuned kesin daha iyi", "Pipeline geçti, kalite kazanımı kanıtlanmadı", "Peak VRAM 9.62 GiB", "Validation başarılı"], answer: 1, explanation: "30/30 tamamlandı ve adapter çalıştı; eval split yoktu, base üç kalite testinde daha güçlüydü." },
];

export const quiz: Record<Locale, QuizQuestion[]> = {
  tr: quizTr,
  en: quizTr.map((q, index) => {
    const e = [
      ["What is the most defensible start for a narrow, structured domain assistant?", ["Instruct checkpoint", "Always Base", "Always Reasoning", "Automatic choice by row count"], "Instruct already carries conversation and instruction behavior, reducing the learning burden."],
      ["What correctly distinguishes ShareGPT from ChatML?", ["They are the same tokenizer", "ShareGPT is a data schema; ChatML is a rendering template", "ChatML is a model weight", "ShareGPT is quantization"], "One stores records; the other serializes messages into the model-facing token sequence."],
      ["What stays fixed during inference?", ["Attention scores", "Q/K/V vectors", "WQ/WK/WV weights", "KV cache length"], "Model weights stay fixed while activations and attention scores depend on context."],
      ["What belongs in the context budget?", ["Only user input", "Only the response", "System + template + input + RAG + response", "Model parameters"], "Context is the total set of token positions conditioning the model."],
      ["What is trained in QLoRA?", ["All 4-bit base weights", "LoRA adapters", "Tokenizer vocabulary", "KV cache"], "The 4-bit base is frozen while small A/B adapters are trained."],
      ["What does QLoRA not guarantee?", ["A frozen base", "A small adapter", "That a specific setup fits in 16 GB", "A 4-bit base"], "Activations, context, batch, and runtime determine the real memory ceiling."],
      ["What happens to LoRA parameters when rank doubles for the same matrices?", ["They stay fixed", "They roughly double", "Alpha becomes zero", "The base unfreezes"], "LoRA parameters scale as r × (d_in + d_out)."],
      ["What is the standard LoRA scale?", ["r/alpha", "alpha/r", "alpha×r", "alpha/√r"], "alpha/√r is rsLoRA; standard LoRA uses alpha/r."],
      ["For micro=2, accumulation=8, GPU=1, what is effective batch?", ["2", "8", "10", "16"], "2 × 8 × 1 = 16."],
      ["What does accumulation 8 mean?", ["8 optimizer updates", "8 backward passes + 1 optimizer update", "8 models in memory", "8 epochs"], "Gradients accumulate over eight micro-steps before one weight update."],
      ["What is the first direction for activation-driven OOM?", ["Increase micro batch", "Reduce context or micro batch", "Increase rank", "Zero accumulation"], "Lower sequence length or micro batch reduces activation load per pass."],
      ["Train loss falls while validation loss rises. What is the first diagnosis?", ["Healthy learning", "Overfitting", "Definite forgetting", "More epochs"], "Train–validation divergence is a classic overfitting signal."],
      ["Domain performance rises while a general benchmark falls. What do you investigate?", ["Padding", "Forgetting or adapter interference", "Tokenizer speed", "Only OOM"], "A retention problem exists when new ability improves while prior ability declines."],
      ["What does low validation loss not prove by itself?", ["Fit to the objective", "Production quality", "Checkpoint comparison", "A computed loss"], "Task accuracy, format, and safety need separate metrics."],
      ["What stays fixed in a fair comparison across two models?", ["Incorrectly rendered tokens", "Semantic records", "Tokenizer IDs", "Special-token vocabulary"], "Keep content fixed while rendering with each model's natural template."],
      ["What can a wrong response-only delimiter cause?", ["Assistant answers excluded from loss", "A larger GPU", "A 4-bit base", "A dataset split"], "If the real assistant boundary is not found, labels are masked incorrectly."],
      ["Why is using the train split for evaluation misleading?", ["It is slow", "It is not unseen data", "It cannot produce JSON", "Adapters cannot save"], "Generalization must be measured on data excluded from gradient updates."],
      ["Why include missing-information examples?", ["Make answers longer", "Reduce fabrication", "Drive loss to zero", "Increase rank"], "A safe model must learn to state that evidence is insufficient."],
      ["What does valid JSON guarantee?", ["Correct content", "Only structural validity", "Source faithfulness", "Safe action"], "Schema constrains shape; correctness and safety require separate tests."],
      ["What is the correct conclusion from the recorded Qwen3 4B run?", ["Fine-tuned is definitely better", "Pipeline passed; quality gain was not proven", "Peak VRAM was 9.62 GiB", "Validation succeeded"], "The run finished and the adapter worked, but there was no eval split and base won all three quality comparisons."],
    ][index] as [string, string[], string];
    return { ...q, prompt: e[0], options: e[1], explanation: e[2] };
  }),
};

export const evidenceLabels: Record<Locale, Record<EvidenceLevel, string>> = {
  tr: { verified: "Doğrulandı", observed: "Gözlendi", planned: "Planlandı", unknown: "Bilinmiyor", simulation: "Simülasyon" },
  en: { verified: "Verified", observed: "Observed", planned: "Planned", unknown: "Unknown", simulation: "Simulation" },
};

export const routeSurfaces: Surface[] = ["roadmap", "labs", "evidence", "data-evaluation", "journey"];
