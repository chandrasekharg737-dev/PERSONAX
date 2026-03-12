const quizData = {
    steps: [
        {
            title: "Basic Details",
            field: "basic",
            type: "multi-input",
            inputs: [
                {
                    label: "Select Your Gender",
                    field: "gender",
                    options: [
                        { id: "male", label: "Male", icon: "👨" },
                        { id: "female", label: "Female", icon: "👩" },
                        { id: "other", label: "Other", icon: "✨" }
                    ]
                },
                {
                    label: "Age Category",
                    field: "age",
                    options: [
                        { id: "teen", label: "13–17 (Teen)", icon: "🎒" },
                        { id: "young", label: "18–25 (Young Adult)", icon: "🎓" },
                        { id: "adult", label: "26–35 (Adult)", icon: "💼" },
                        { id: "mature", label: "36–50 (Mature)", icon: "👔" },
                        { id: "senior", label: "50+", icon: "👴" }
                    ]
                }
            ]
        },
        {
            title: "Body Type",
            field: "bodyType",
            dependsOn: "gender",
            options: {
                female: [
                    { id: "hourglass", label: "Hourglass", icon: "⏳" },
                    { id: "pear", label: "Pear", icon: "🍐" },
                    { id: "apple", label: "Apple", icon: "🍎" },
                    { id: "rectangle", label: "Rectangle", icon: "📏" },
                    { id: "inverted_triangle", label: "Inverted Triangle", icon: "🔻" }
                ],
                male: [
                    { id: "ectomorph", label: "Ectomorph", icon: "🏃" },
                    { id: "mesomorph", label: "Mesomorph", icon: "💪" },
                    { id: "endomorph", label: "Endomorph", icon: "🏋️" },
                    { id: "athletic", label: "Athletic", icon: "🏅" }
                ],
                other: [
                    { id: "average", label: "Average", icon: "👤" },
                    { id: "slim", label: "Slim", icon: "🦯" },
                    { id: "athletic", label: "Athletic", icon: "💪" },
                    { id: "curvy", label: "Curvy", icon: "🌊" }
                ]
            }
        },
        {
            title: "Style Preferences",
            field: "style",
            type: "multi-select",
            options: [
                { id: "casual", label: "Casual", icon: "👕" },
                { id: "formal", label: "Formal", icon: "👔" },
                { id: "streetwear", label: "Streetwear", icon: "🛹" },
                { id: "minimalist", label: "Minimalist", icon: "⚪" },
                { id: "traditional", label: "Traditional", icon: "🕌" },
                { id: "sporty", label: "Sporty", icon: "👟" },
                { id: "elegant", label: "Elegant", icon: "💎" },
                { id: "aesthetic", label: "Aesthetic", icon: "✨" }
            ],
            extra: {
                type: "color-picker",
                label: "Favorite Color",
                field: "favoriteColor"
            }
        },
        {
            title: "Skin Profile",
            field: "skin",
            type: "sub-fields",
            fields: [
                {
                    label: "Skin Type",
                    field: "skinType",
                    options: [
                        { id: "oily", label: "Oily" },
                        { id: "dry", label: "Dry" },
                        { id: "combination", label: "Combination" },
                        { id: "sensitive", label: "Sensitive" },
                        { id: "normal", label: "Normal" }
                    ]
                },
                {
                    label: "Skin Tone",
                    field: "skinTone",
                    options: [
                        { id: "very_fair", label: "Very Fair" },
                        { id: "fair", label: "Fair" },
                        { id: "medium", label: "Medium" },
                        { id: "tan", label: "Tan" },
                        { id: "deep", label: "Deep" }
                    ]
                },
                {
                    label: "Undertone",
                    field: "undertone",
                    options: [
                        { id: "warm", label: "Warm" },
                        { id: "cool", label: "Cool" },
                        { id: "neutral", label: "Neutral" }
                    ]
                }
            ]
        },
        {
            title: "Primary Skin Concern",
            field: "skinConcern",
            type: "multi-select",
            options: [
                { id: "acne", label: "Acne", icon: "🩹" },
                { id: "pigmentation", label: "Pigmentation", icon: "🌑" },
                { id: "dark_circles", label: "Dark Circles", icon: "🐼" },
                { id: "dullness", label: "Dullness", icon: "☁️" },
                { id: "fine_lines", label: "Fine Lines", icon: "〰️" },
                { id: "texture", label: "Uneven Texture", icon: "🌋" },
                { id: "sun_damage", label: "Sun Damage", icon: "☀️" }
            ]
        },
        {
            title: "Hair Profile",
            field: "hair",
            type: "sub-fields",
            fields: [
                {
                    label: "Hair Type",
                    field: "hairType",
                    options: [
                        { id: "straight", label: "Straight" },
                        { id: "wavy", label: "Wavy" },
                        { id: "curly", label: "Curly" },
                        { id: "coily", label: "Coily" }
                    ]
                },
                {
                    label: "Scalp Type",
                    field: "scalpType",
                    options: [
                        { id: "oily", label: "Oily" },
                        { id: "dry", label: "Dry" },
                        { id: "normal", label: "Normal" },
                        { id: "sensitive", label: "Sensitive" }
                    ]
                },
                {
                    label: "Thickness",
                    field: "thickness",
                    options: [
                        { id: "thin", label: "Thin" },
                        { id: "medium", label: "Medium" },
                        { id: "thick", label: "Thick" }
                    ]
                }
            ]
        },
        {
            title: "Major Hair Concern",
            field: "hairConcern",
            type: "multi-select",
            options: [
                { id: "hairfall", label: "Hair Fall", icon: "🍂" },
                { id: "dandruff", label: "Dandruff", icon: "❄️" },
                { id: "frizz", label: "Frizz", icon: "☁️" },
                { id: "dryness", label: "Dryness", icon: "🌵" },
                { id: "split_ends", label: "Split Ends", icon: "✂️" },
                { id: "volume", label: "Lack of Volume", icon: "🌬️" }
            ]
        },
        {
            title: "Overall Concerns",
            field: "overallConcerns",
            type: "multi-select",
            options: [
                { id: "confidence", label: "Confidence", icon: "✨" },
                { id: "professional", label: "Professional Look", icon: "💼" },
                { id: "glow_up", label: "Glow Up", icon: "🌟" },
                { id: "wedding", label: "Wedding Preparation", icon: "💍" },
                { id: "college", label: "College Styling", icon: "🎓" },
                { id: "interview", label: "Interview Preparation", icon: "🤝" },
                { id: "party", label: "Party Styling", icon: "🎉" },
                { id: "grooming", label: "Everyday Grooming", icon: "🪞" }
            ]
        }
    ]
};

const recommendations = {
    skincare: {
        oily: {
            title: "Minty Oil-Control Routine",
            ingredients: ["Salicylic Acid", "Niacinamide", "Tea Tree Oil"],
            products: [
                { id: "cleanser_oily", title: "Minty Oil-Control Cleanser", desc: "Fresh mint extracts to keep your skin matte and happy.", why: "Matches your oily skin type by gently removing excess sebum.", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400" },
                { id: "moisturizer_oily", title: "Sky-Blue Water Gel", desc: "Weightless hydration that feels like a fresh breeze.", why: "Non-greasy formula perfect for your oily profile.", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400" }
            ],
            tip: "Focus on barrier repair; over-cleansing can actually trigger more oil."
        },
        dry: {
            title: "Peach Hydration Routine",
            ingredients: ["Hyaluronic Acid", "Ceramides", "Glycerin"],
            products: [
                { id: "cleanser_dry", title: "Peach Hydration Wash", desc: "Creamy peach goodness to nourish and soften dry skin.", why: "Replenishes the moisture your dry skin craves.", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400" },
                { id: "moisturizer_dry", title: "Lavender Barrier Cream", desc: "Soothing lavender and ceramides to lock in moisture.", why: "Extra richness to protect your skin's natural barrier.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" }
            ],
            tip: "Apply moisturizer on damp skin to lock in maximum hydration."
        },
        combination: {
            title: "Balanced Zen Routine",
            ingredients: ["Squalane", "Green Tea", "Rosehip Oil"],
            products: [
                { id: "cleanser_comb", title: "Gentle Zen Foaming Wash", desc: "Balanced cleansing for T-zone and dry cheeks.", why: "Cleanses without stripping delicate areas.", img: "https://images.unsplash.com/photo-1556228515-91953bc029bb?auto=format&fit=crop&q=80&w=400" },
                { id: "moisturizer_comb", title: "Dual-Action Cloud Cream", desc: "Hydrates dry spots while keeping oil at bay.", why: "Adapts to your skin's varied needs.", img: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=400" }
            ],
            tip: "Multi-mask: use clay on your T-zone and hydration on cheeks."
        },
        sensitive: {
            title: "Calming Petal Routine",
            ingredients: ["Centella Asiatica", "Oatmeal", "Aloe Vera"],
            products: [
                { id: "cleanser_sens", title: "Oat-So-Gentle Milk Wash", desc: "Ultra-mild formula to soothe redness and irritation.", why: "Zero fragrance and pH-balanced for sensitivity.", img: "https://images.unsplash.com/photo-1556228515-91953bc029bb?auto=format&fit=crop&q=80&w=400" },
                { id: "moisturizer_sens", title: "Cica-Rescue Soothing Balm", desc: "Heals even the most irritated skin barriers.", why: "Proven to reduce redness and calm flares.", img: "https://images.unsplash.com/photo-1556227702-d1e4e7ca562a?auto=format&fit=crop&q=80&w=400" }
            ],
            tip: "Patch test every new product on your inner wrist first."
        },
        normal: {
            title: "Vitality Glow Routine",
            ingredients: ["Vitamin C", "Peptides", "Antioxidants"],
            products: [
                { id: "cleanser_norm", title: "Brightening Citrus Wash", desc: "Fresh start for naturally balanced skin.", why: "Maintains your perfect natural balance.", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400" },
                { id: "moisturizer_norm", title: "Daily Radiance Fluid", desc: "Lightweight protection and a healthy glow.", why: "Keeps your skin looking its absolute best.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" }
            ],
            tip: "Focus on preventative care like daily SPF to maintain your glow."
        },
        acne_extra: { id: "acne_serum", title: "Clear Sky Blemish Spot Treat", desc: "Targeted care with zinc and tea tree for clear skin.", why: "Because you mentioned acne as a primary concern.", img: "https://images.unsplash.com/photo-1556228515-91953bc029bb?auto=format&fit=crop&q=80&w=400" },
        dullness_extra: { id: "dull_bright", title: "Glow-Boost Vitamin C", desc: "Instantly revives tired, lackluster skin.", why: "Addresses your concern for brightness.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" }
    },
    haircare: {
        curly: {
            title: "Defined Curls Routine",
            advice: "Detangle only when wet with a wide-tooth comb or fingers.",
            products: [
                { id: "shampoo_curly", title: "Butter-Rich Curl Wash", desc: "Moisture-heavy cleansing for bouncy definition.", why: "Specific formula to hydrate your curly hair.", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?auto=format&fit=crop&q=80&w=400" },
                { id: "mask_curly", title: "Deep-Sea Moisture Mask", desc: "Intense repair for thirsty coils.", why: "Provides the heavy hydration curls need.", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400" }
            ]
        },
        straight: {
            title: "Sleek & Smooth Routine",
            advice: "Blow-dry with a cool shot to seal the cuticle for maximum shine.",
            products: [
                { id: "shampoo_straight", title: "Silk-Pro Straight Wash", desc: "Lightweight formula for a sleek, non-greasy finish.", why: "Maintains volume while ensuring smoothness.", img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&q=80&w=400" }
            ]
        },
        oily_scalp: {
            title: "Balancing Scalp Care",
            advice: "Focus shampoo only on the roots; let it rinse through the ends.",
            products: [
                { id: "shampoo_oily", title: "Clarifying Mint Scrub", desc: "Deep cleanses to remove build-up and excess oil.", why: "Keeps your oily scalp fresh and clean.", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400" }
            ]
        },
        dandruff_extra: { id: "shampoo_dandruff", title: "Cooling Lavender Scrub", desc: "Scalp relief that smells amazing and works wonders.", why: "Gentle exfoliation for your dandruff-prone scalp.", img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&q=80&w=400" },
        hairfall_extra: { id: "shampoo_hairfall", title: "Root-Revive Mint Wash", desc: "Energizing mint and caffeine to wake up those follicles.", why: "Specifically chosen to help with your hair fall concerns.", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400" },
        dryness_extra: { id: "shampoo_dry_h", title: "Peach Glaze Conditioner", desc: "Silky finish for hair that's seen better days.", why: "Provides the hydration your dry hair needs.", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?auto=format&fit=crop&q=80&w=400" }
    },
    style: {
        pear: {
            title: "Balanced Silhouette",
            tips: "Suggest A-line outfits and structured shoulders to balance proportions.",
            outfits: [
                { id: "pear_dress", title: "Floral A-Line Dress", desc: "High-waist design with a flowy skirt.", why: "Highlights your waist while skimming your lower body.", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400" }
            ]
        },
        athletic: {
            title: "Structured Elegance",
            tips: "Suggest structured and fitted styles to enhance your frame.",
            outfits: [
                { id: "athletic_suit", title: "Tailored Blazer Set", desc: "Sharp lines and a perfect fit.", why: "Complements your strong, athletic silhouette.", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400" }
            ]
        },
        hourglass: {
            title: "Curvy Classic",
            tips: "Focus on waist-defining pieces to celebrate balance.",
            outfits: [
                { id: "hourglass_wrap", title: "Belted Wrap Dress", desc: "Follows your natural curves beautifully.", why: "Showcases your balanced proportions.", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" }
            ]
        },
        default: {
            title: "Timeless Sophistication",
            tips: "Focus on well-tailored basics that project confidence.",
            outfits: [
                { id: "default_style", title: "Modern Minimalist Set", desc: "Clean lines and premium textures.", why: "A versatile look that works for any occasion.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" }
            ]
        }
    }
};

const assistantMessages = {
    step0: "Hi! I'm your PERSONAX assistant. Let's discover your perfect style!",
    step1: "Ooh, I love those style vibes! Tell me more about your body type.",
    step2: "Almost there! Let's talk about your skin profile.",
    step3: "Skin is so unique! Now, what about your hair?",
    step4: "Last one! What are your overall goals for this glow-up?",
    analyzing: "Hold tight! Our AI is crafting your custom blueprint...",
    results: "Wow! Your transformation plan is ready. You look like a star! ✨"
};

let currentStep = 0;
let userSelections = {
    gender: 'other',
    age: null,
    bodyType: null,
    style: [],
    favoriteColor: '#6c5ce7',
    skinType: null,
    skinTone: null,
    undertone: null,
    skinConcern: [],
    hairType: null,
    scalpType: null,
    thickness: null,
    hairConcern: [],
    overallConcerns: []
};

// --- ANIMATION HELPERS ---

function createFloatingShapes() {
    const container = document.getElementById('floating-shapes');
    if (!container) return;
    const shapeCount = 15;
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.className = 'shape';
        const size = Math.random() * 150 + 50;
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.left = `${Math.random() * 100}vw`;
        shape.style.animationDelay = `${Math.random() * 10}s`;
        shape.style.animationDuration = `${Math.random() * 10 + 15}s`;
        container.appendChild(shape);
    }
}

class Confetti {
    constructor() {
        this.canvas = document.getElementById('confetti-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.active = false;
        window.addEventListener('resize', () => this.resize());
        this.resize();
    }
    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    start() {
        this.active = true;
        this.particles = [];
        for (let i = 0; i < 150; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height - this.canvas.height,
                size: Math.random() * 8 + 4,
                color: `hsl(${Math.random() * 360}, 70%, 70%)`,
                speed: Math.random() * 4 + 2,
                angle: Math.random() * 6.28
            });
        }
        this.animate();
        setTimeout(() => this.active = false, 5000);
    }
    animate() {
        if (!this.active && this.particles.length === 0) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.particles.forEach((p, i) => {
            p.y += p.speed;
            p.x += Math.sin(p.angle) * 2;
            p.angle += 0.05;
            this.ctx.fillStyle = p.color;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, 6.28);
            this.ctx.fill();
            if (p.y > this.canvas.height) this.particles.splice(i, 1);
        });
        if (this.active || this.particles.length > 0) requestAnimationFrame(() => this.animate());
    }
}

const confettiInstance = new Confetti();
createFloatingShapes();

// --- CORE APP LOGIC ---

const homeSection = document.getElementById('home-section');
const quizSection = document.getElementById('quiz-section');
const resultSection = document.getElementById('result-section');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const quizForm = document.getElementById('quiz-form');
const progressFill = document.getElementById('progress-fill');
const stepCount = document.getElementById('step-count');
const resultContent = document.getElementById('result-content');

startBtn.addEventListener('click', () => {
    switchSection(homeSection, quizSection);
    showStep(0);
});

restartBtn.addEventListener('click', () => {
    currentStep = 0;
    userSelections = {
        gender: 'other',
        age: null,
        bodyType: null,
        style: [],
        favoriteColor: '#6c5ce7',
        skinType: null,
        skinTone: null,
        undertone: null,
        skinConcern: [],
        hairType: null,
        scalpType: null,
        thickness: null,
        hairConcern: [],
        overallConcerns: []
    };
    switchSection(resultSection, homeSection);
});

function switchSection(from, to) {
    from.classList.remove('active');
    setTimeout(() => {
        to.classList.add('active');
        if (to === resultSection) confettiInstance.start();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 400);
}

// --- NAVIGATION LOGIC ---

const steps = document.querySelectorAll('.form-step'); // Define steps globally or pass to functions

function updateStepUI() {
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === currentStep);
    });

    // Update Progress Indicator
    const markers = document.querySelectorAll('.step-marker');
    markers.forEach((marker, index) => {
        marker.classList.toggle('active', index <= currentStep);
    });

    stepCount.innerText = `Step ${currentStep + 1} of ${steps.length}`;
    progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;

    // Update Assistant Message
    const assistantBubble = document.getElementById('ai-bubble');
    if (assistantBubble && assistantMessages[`step${currentStep}`]) {
        assistantBubble.classList.remove('active');
        setTimeout(() => {
            assistantBubble.innerText = assistantMessages[`step${currentStep}`];
            assistantBubble.classList.add('active');
        }, 300);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Ensure scroll to top on step change
}

window.nextStep = () => {
    if (validateStep(currentStep)) {
        if (currentStep < steps.length - 1) {
            currentStep++;
            updateStepUI();
        } else {
            generateResults();
        }
    }
};

window.prevStep = () => {
    if (currentStep > 0) {
        currentStep--;
        updateStepUI();
    }
};

function validateStep(n) {
    const errorDiv = document.getElementById(`error-step${n + 1}`);
    if (errorDiv) {
        errorDiv.classList.remove('visible');
        errorDiv.innerText = '';
    }

    if (n === 0) { // Step 1: Basic Details
        if (!userSelections.gender || !userSelections.age) {
            showError(n, "Please select both gender and age category.");
            return false;
        }
    } else if (n === 1) { // Step 2: Personality & Style
        if (!userSelections.style) {
            showError(n, "Please select your style preference.");
            return false;
        }
    } else if (n === 2) { // Step 3: Body Type
        if (!userSelections.bodyType) {
            showError(n, "Please select your body type.");
            return false;
        }
    } else if (n === 3) { // Step 4: Skin Profile
        const skinType = document.getElementById('skinType')?.value;
        const skinTone = document.getElementById('skinTone')?.value;
        const undertone = document.getElementById('undertone')?.value;

        if (!skinType || !skinTone || !undertone) {
            showError(n, "Please complete all skin profile fields.");
            return false;
        }
        userSelections.skinType = skinType;
        userSelections.skinTone = skinTone;
        userSelections.undertone = undertone;
    } else if (n === 4) { // Step 5: Hair Profile & Concerns
        const hairType = document.getElementById('hairType')?.value;
        const scalpType = document.getElementById('scalpType')?.value;
        const thickness = document.getElementById('thickness')?.value;

        if (!hairType || !scalpType || !thickness) {
            showError(n, "Please complete all hair profile fields.");
            return false;
        }
        userSelections.hairType = hairType;
        userSelections.scalpType = scalpType;
        userSelections.thickness = thickness;

        if (userSelections.skinConcern.length === 0 || userSelections.hairConcern.length === 0) {
            showError(n, "Please select at least one skin concern and one hair concern.");
            return false;
        }
    }
    return true;
}

function showError(stepIdx, msg) {
    const errorDiv = document.getElementById(`error-step${stepIdx + 1}`);
    if (errorDiv) {
        errorDiv.innerText = msg;
        errorDiv.classList.add('visible');
    }
}

// --- OPTION SELECTION LOGIC ---

window.selectOption = (el) => {
    const field = el.dataset.field;
    const value = el.dataset.id;

    // Clear other selections in same group (if single select)
    const parent = el.closest('.card-grid') || el.closest('.form-step');
    parent.querySelectorAll(`[data-field="${field}"]`).forEach(card => card.classList.remove('selected'));

    el.classList.add('selected');
    userSelections[field] = value;

    // Logic for conditional body shapes
    if (field === 'gender') {
        const femaleShapes = document.getElementById('body-shape-female');
        const maleShapes = document.getElementById('body-shape-male');

        if (value === 'male') {
            femaleShapes.style.display = 'none';
            maleShapes.style.display = 'block';
        } else {
            femaleShapes.style.display = 'block';
            maleShapes.style.display = 'none';
        }
        // Reset bodyType selection when gender changes
        userSelections.bodyType = null;
        document.querySelectorAll('[data-field="bodyType"]').forEach(card => card.classList.remove('selected'));
    }
};

window.toggleMultiOption = (el) => {
    const field = el.dataset.field;
    const value = el.dataset.id;

    if (!Array.isArray(userSelections[field])) {
        userSelections[field] = [];
    }

    const index = userSelections[field].indexOf(value);
    if (index > -1) {
        userSelections[field].splice(index, 1);
        el.classList.remove('selected');
    } else {
        userSelections[field].push(value);
        el.classList.add('selected');
    }
};

window.updateColor = (val) => {
    userSelections.favoriteColor = val;
};

// --- AI RECOMMENDATION ENGINE (V2) ---

function getStyleIdentity(styles, bodyType, gender, age, favColor) {
    const primaryStyle = styles[0] || 'Modern';
    const report = {
        title: "👗 Style Identity",
        theme: `You shine best in **${primaryStyle}** aesthetics with **${bodyType}** optimized silhouettes.`,
        outfits: [],
        palette: getColorPalette(userSelections.skinTone, userSelections.undertone, favColor),
        tips: ""
    };

    // Silhouette logic
    if (bodyType === 'hourglass') report.tips = "Focus on waist-defining pieces to celebrate your balanced proportions.";
    else if (bodyType === 'pear') report.tips = "Add volume to your upper body with structured shoulders or bold necklines.";
    else if (bodyType === 'athletic' || bodyType === 'mesomorph') report.tips = "Play with softer fabrics or draped details to create fluid movement.";
    else report.tips = "Structured blazers and clean lines will elevate your natural frame.";

    // Outfit examples based on age & style
    if (age === 'teen') {
        report.outfits.push({
            title: "Campus Statement",
            desc: "Oversized graphic layers paired with tailored bottoms.",
            why: "Balances comfort with high-fashion streetwear elements.",
            img: "https://images.unsplash.com/photo-1523381235212-d73f80385227?auto=format&fit=crop&q=80&w=400"
        });
    } else if (age === 'mature' || age === 'senior') {
        report.outfits.push({
            title: "Timeless Sophistication",
            desc: "Monochrome layers with high-quality textures.",
            why: "Projecting authority while maintaining modern elegance.",
            img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400"
        });
    } else {
        report.outfits.push({
            title: "Urban Professional",
            desc: "Structured basics with one 'hero' accessory.",
            why: "Versatile enough for work-to-dinner transitions.",
            img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400"
        });
    }

    return report;
}

function getSkincareIntelligence(type, concerns, tone, age) {
    const base = recommendations.skincare[type] || recommendations.skincare.normal;
    const report = {
        title: "🧴 Skincare Routine",
        theme: base.title,
        ingredients: [...base.ingredients],
        products: [...base.products],
        tip: base.tip
    };

    if (concerns.includes('acne')) {
        report.products.push(recommendations.skincare.acne_extra);
        if (!report.ingredients.includes("Salicylic Acid")) report.ingredients.push("Salicylic Acid");
    }
    if (concerns.includes('dullness')) {
        report.products.push(recommendations.skincare.dullness_extra);
        if (!report.ingredients.includes("Vitamin C")) report.ingredients.push("Vitamin C");
    }

    return report;
}

function getHaircareBlueprint(type, concerns, scalpType) {
    let base = recommendations.haircare[type] || recommendations.haircare.straight;
    if (scalpType === 'oily') {
        base = recommendations.haircare.oily_scalp;
    }

    const report = {
        title: "💇 Haircare Routine",
        theme: base.title,
        products: [...base.products],
        advice: base.advice
    };

    if (concerns.includes('dandruff')) {
        report.products.push(recommendations.haircare.dandruff_extra);
    }
    if (concerns.includes('dryness')) {
        report.products.push(recommendations.haircare.dryness_extra);
    }

    return report;
}

// --- NEW AI FEATURES ---

function calculateGlowUpScore(selections) {
    let score = 70; // Baseline

    // Impact of concerns
    if (selections.skinConcern !== 'none') score -= 5;
    if (selections.hairConcern !== 'none') score -= 5;

    // Bonus for lifestyle/positive traits (simple logic for demo)
    if (selections.age === 'teen') score += 10; // Youthful advantage
    if (selections.overallConcerns.includes('confidence')) score -= 10; // Room for growth

    return Math.min(Math.max(score, 30), 100);
}

function getStyleIdentity(style, bodyType, gender) {
    const identities = {
        minimalist: "Soft Minimalist",
        elegant: "Urban Chic Explorer",
        streetwear: "Confident Trendsetter",
        vintage: "Classic Soul",
        bold: "Daring Visionary",
        natural: "Natural Glow Lover"
    };
    return identities[style] || "Unique Personality";
}

function animateScore(targetScore) {
    const scoreElement = document.getElementById('score-value');
    const circle = document.querySelector('.score-fill');
    let current = 0;

    const interval = setInterval(() => {
        if (current >= targetScore) {
            clearInterval(interval);
        } else {
            current++;
            scoreElement.innerText = current;
        }
    }, 20);

    const offset = 565.48 - (565.48 * targetScore) / 100;
    setTimeout(() => {
        circle.style.strokeDashoffset = offset;
    }, 100);
}

function getScoreTips(score) {
    if (score > 85) return "Your'e glowing! Maintain this routine and focus on hydration.";
    if (score > 70) return "Great base! Adding a weekly treatment could push you to 100.";
    return "Consistency is key. Start with the routine below for 21 days!";
}

window.generateResults = () => {
    if (validateStep(currentStep)) {
        // Show assistant analyzing message
        const assistantBubble = document.getElementById('ai-bubble');
        assistantBubble.innerText = assistantMessages.analyzing;

        showLoading(() => {
            const { gender, age, bodyType, style, favoriteColor, skinType, skinTone, undertone, skinConcern, hairType, scalpType, thickness, hairConcern, overallConcerns } = userSelections;

            const score = calculateGlowUpScore(userSelections);
            const skinRec = getSkincareIntelligence(skinType, skinConcern, skinTone, age);
            const hairRec = getHaircareBlueprint(hairType, hairConcern, scalpType);
            const styleRec = getStyleLogic(style, bodyType, gender, age, favoriteColor);

            const identityName = styleRec.title;

            const reportHTML = `
                <div class="identity-report-header fade-in">
                    <p class="report-subtitle">Personalized AI Identity Report</p>
                    <h2 class="report-main-title">The ${gender.charAt(0).toUpperCase() + gender.slice(1)} Vision</h2>
                </div>

                <div class="identity-card-main reveal-step visible" style="margin-bottom: 3rem;">
                    <div class="glass-card" style="padding: 2.5rem; text-align: center; border: 3px solid var(--pastel-indigo);">
                        <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Your Style Personality</span>
                        <h1 style="font-size: 2.5rem; margin: 1rem 0; color: var(--accent);">${identityName} ✨</h1>
                    </div>
                </div>

                <div class="glow-up-container reveal-step visible">
                    <div class="score-circle-wrapper">
                        <svg class="score-svg" width="200" height="200">
                            <circle class="score-background" cx="100" cy="100" r="90"></circle>
                            <circle class="score-fill" cx="100" cy="100" r="90"></circle>
                        </svg>
                        <div class="score-text-center">
                            <span class="score-value" id="score-value">0</span>
                            <span class="score-label">Glow Score</span>
                        </div>
                    </div>
                    <p style="margin-top: 1.5rem; font-weight: 600; color: var(--text-muted);">${getScoreTips(score)}</p>
                </div>

                <div class="report-section reveal-step visible" style="--d: 0.1s">
                    <div class="section-badge">👗 Style Identity</div>
                    <p class="section-theme">${styleRec.theme}</p>
                    <p style="margin-bottom: 1.5rem; font-style: italic;">✨ Tip: ${styleRec.tips}</p>
                    <div class="rec-grid">
                        ${styleRec.outfits.map(o => createPremiumCard(o)).join('')}
                    </div>
                </div>

                <div class="report-section reveal-step visible" style="--d: 0.3s">
                    <div class="section-badge">🧴 Skincare Routine</div>
                    <p class="section-theme">${skinRec.theme}</p>
                    <div class="ingredients-cloud">
                        ${skinRec.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('')}
                    </div>
                    <div class="rec-grid">
                        ${skinRec.products.map(s => createPremiumCard(s)).join('')}
                    </div>
                    <p style="margin-top: 1rem; font-weight: 500;">💡 Pro Tip: ${skinRec.tip}</p>
                </div>

                <div class="report-section reveal-step visible" style="--d: 0.5s">
                    <div class="section-badge">💇 Haircare Routine</div>
                    <p class="section-theme">${hairRec.theme}</p>
                    <div class="rec-grid">
                        ${hairRec.products.map(h => createPremiumCard(h)).join('')}
                    </div>
                    <p style="margin-top: 1rem; font-weight: 500;">💡 Advice: ${hairRec.advice}</p>
                </div>

                 <div class="report-section reveal-step visible" style="--d: 0.7s">
                    <div class="section-badge">🎨 Color Palette</div>
                    <div class="palette-container" style="display: flex; gap: 1rem; margin: 1.5rem 0; justify-content: center;">
                        ${getColorPalette(skinTone, undertone, favoriteColor).map(c => `
                            <div class="color-swatch" style="background: ${c}; width: 60px; height: 60px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.1);"></div>
                        `).join('')}
                    </div>
                    <p style="text-align: center; color: var(--text-muted);">These colors complement your ${undertone} undertone.</p>
                </div>

                <div class="report-section reveal-step visible" style="--d: 0.9s">
                    <div class="section-badge">✨ Confidence Tip</div>
                    <div class="glass-card" style="padding: 2rem; margin-top: 1rem; border-left: 5px solid var(--accent);">
                        <p style="font-size: 1.2rem; font-family: 'Outfit'; line-height: 1.6;">"${getConfidenceTip(overallConcerns, age)}"</p>
                    </div>
                </div>
            `;

            resultContent.innerHTML = reportHTML;
            switchSection(quizSection, resultSection);

            // Start animations
            animateScore(score);
            assistantBubble.innerText = assistantMessages.results;

            if (typeof confetti !== 'undefined') {
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            }
        });
    }
};

// Update helper to avoid name collision
function getStyleLogic(style, bodyType, gender, age, favoriteColor) {
    const base = recommendations.style[bodyType] || recommendations.style.default;
    const report = {
        title: base.title,
        theme: `Empowering your **${bodyType}** silhouette with **${style.join(' & ')}** aesthetics.`,
        tips: base.tips,
        outfits: [...base.outfits]
    };

    // Add style-specific outfit if available
    if (style.includes('streetwear') && age === 'teen') {
        report.outfits.push({
            id: "streetwear_teen",
            title: "Urban Pastel Oversize",
            desc: "Comfort meets hype in the best way possible.",
            why: "Matches your youthfulness and streetwear style preference.",
            img: "https://images.unsplash.com/photo-1523381235212-d73f80385227?auto=format&fit=crop&q=80&w=400"
        });
    }

    return report;
}

// --- HELPER FUNCTIONS ---

function createPremiumCard(data) {
    return `
        <div class="premium-rec-card fade-up">
            <div class="card-img-wrapper">
                <img src="${data.img}" alt="${data.title}" onerror="handleImageError(this)">
                <div class="why-badge">AI Pick</div>
            </div>
            <div class="card-content">
                <h3>${data.title}</h3>
                <p class="card-desc">${data.desc}</p>
                <div class="why-text">✨ ${data.why}</div>
            </div>
        </div>
    `;
}

function handleImageError(img) {
    img.onerror = null;
    img.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400";
}

function getColorPalette(tone, undertone, favorite) {
    const palettes = {
        warm: ['#FF6B6B', '#FFD93D', '#6BCB77', '#F0A500'],
        cool: ['#B197FC', '#74C0FC', '#63E6BE', '#339AF0'],
        neutral: ['#868E96', '#ADB5BD', '#212529', '#E9ECEF']
    };
    const base = palettes[undertone] || palettes.neutral;
    return [favorite, ...base.slice(0, 3)];
}

function getConfidenceTip(concerns, age) {
    if (concerns.includes('professional')) return "Success is 80% confidence. Wear pieces that make you feel powerful, and your performance will follow.";
    if (concerns.includes('glow_up')) return "Consistency is your greatest tool. Small, daily rituals lead to massive transformations over time.";
    if (age === 'teen') return "The most attractive thing you can wear is your unique personality. Carry it with pride!";
    return "Elegance is not about being noticed, it's about being remembered.";
}

// Utility to show multi-stage loading before results
function showLoading(callback) {
    const originalContent = quizForm.innerHTML;
    const loadingSteps = [
        "Scanning your unique traits...",
        "Analyzing skin & hair profile...",
        "Matching with style identity...",
        "Generating your custom blueprint..."
    ];

    let step = 0;
    quizForm.innerHTML = `
        <div class="loading-container fade-in" style="flex-direction: column; display: flex; align-items: center; justify-content: center; min-height: 400px;">
            <div class="loader"></div>
            <p id="loading-text" style="margin-top: 2rem; font-weight: 700; color: #FF7675; font-size: 1.4rem; font-family: 'Outfit';">Starting AI analysis...</p>
        </div>
    `;

    const interval = setInterval(() => {
        if (step < loadingSteps.length) {
            document.getElementById('loading-text').innerText = loadingSteps[step];
            step++;
        } else {
            clearInterval(interval);
            quizForm.innerHTML = originalContent;
            callback();
        }
    }, 800);
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    const steps = document.querySelectorAll('.form-step');
    if (stepCount) stepCount.innerText = `Step 1 of ${steps.length}`;
    if (progressFill) progressFill.style.width = `${(1 / steps.length) * 100}%`;

    // Initial Assistant Message
    setTimeout(() => {
        const assistantBubble = document.getElementById('ai-bubble');
        if (assistantBubble) assistantBubble.classList.add('active');
    }, 1000);
});
