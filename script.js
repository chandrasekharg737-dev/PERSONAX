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
        cleansers: {
            oily: { title: "Oil-Control Foaming Cleanser", desc: "Formulated with Salicylic Acid to deep-clean pores and regulate sebum.", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=400" },
            dry: { title: "Hydrating Milk Cleanser", desc: "A creamy, non-stripping formula that replenishes moisture while cleansing.", img: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=400" },
            combination: { title: "Balanced Gel Cleanser", desc: "Targets oily zones while soothing dry areas for a perfect equilibrium.", img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=400" },
            sensitive: { title: "Ultra-Gentle Micellar Water", desc: "Soothing, fragrance-free formula to remove impurities without irritation.", img: "https://images.unsplash.com/photo-1617897903246-7392ce73c176?auto=format&fit=crop&q=80&w=400" },
            normal: { title: "Daily PH Balanced Wash", desc: "Maintains your natural skin barrier for a healthy, glowing complexion.", img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400" },
            acne: { title: "Clarifying Acne Wash", desc: "Active Benzoyl Peroxide to fight breakouts and prevent future spots.", img: "https://images.unsplash.com/photo-1556228515-91953bc029bb?auto=format&fit=crop&q=80&w=400" }
        },
        moisturizers: {
            oily: { title: "Matte Water Gel", desc: "Weightless hydration that leaves a smooth, shine-free finish.", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400" },
            dry: { title: "Ceramide Barrier Cream", desc: "Rich in essential lipids to lock in moisture and repair very dry skin.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" },
            combination: { title: "Light Renewal Lotion", desc: "A versatile moisturizer that hydrates deeply without feeling heavy.", img: "https://images.unsplash.com/photo-1631730486784-5456117f6931?auto=format&fit=crop&q=80&w=400" },
            sensitive: { title: "Aloe Soothing Cream", desc: "Instantly calms redness and provides a protective cooling barrier.", img: "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?auto=format&fit=crop&q=80&w=400" },
            normal: { title: "Vitamin-Enriched Cream", desc: "Boosts skin vitality with a blend of antioxidants and hydration.", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=400" },
            acne: { title: "Non-Comedogenic Hydrator", desc: "Won't clog pores, designed to soothe skin treated with acne actives.", img: "https://images.unsplash.com/photo-1556229174-5e42a09e45af?auto=format&fit=crop&q=80&w=400" }
        }
    },
    haircare: {
        shampoo: {
            hairfall: { title: "Stimulating Growth Wash", desc: "Caffeine-enriched to wake up your follicles and reduce thinning.", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400" },
            dandruff: { title: "Cooling Scalp Relief", desc: "Powerful Zinc therapy to eliminate flakes and soothe itchiness.", img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&q=80&w=400" },
            dryScalp: { title: "Nourishing Scalp Therapy", desc: "Gently exfoliates and hydrates the scalp with natural oils.", img: "https://images.unsplash.com/photo-1626783416763-67a92e5e7266?auto=format&fit=crop&q=80&w=400" },
            oilyScalp: { title: "Deep Purifying Charcoal", desc: "Detoxifies the scalp and removes excess oil for weightless hair.", img: "https://images.unsplash.com/photo-1519735891395-50e50125860d?auto=format&fit=crop&q=80&w=400" },
            frizz: { title: "Smoothing Silk Shampoo", desc: "Tames flyaways and provides a protective shield against humidity.", img: "https://images.unsplash.com/photo-1624338466581-24758763750a?auto=format&fit=crop&q=80&w=400" },
            damage: { title: "Bond Repair Recovery", desc: "Intense protein therapy to rebuild broken hair bonds and split ends.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400" }
        }
    },
    style: {
        minimal: {
            male: { title: "Modern Minimalist", desc: "Elevated basics in neutral tones. Think high-quality tees and tailored trousers.", img: "https://images.unsplash.com/photo-1516826435551-36a8a09e4545?auto=format&fit=crop&q=80&w=400" },
            female: { title: "Quiet Luxury", desc: "Clean lines, silk fabrics, and a sophisticated monochromatic palette.", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400" },
            other: { title: "Clean Slate", desc: "Versatile, structural pieces that prioritize comfort and silhouette.", img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=400" }
        },
        street: {
            male: { title: "Street Icon", desc: "Bold graphics, unique textures, and the latest sneaker drops.", img: "https://images.unsplash.com/photo-1552066344-24632e5de466?auto=format&fit=crop&q=80&w=400" },
            female: { title: "Urban Edge", desc: "Oversized silhouettes mixed with high-fashion statement accessories.", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400" },
            other: { title: "Trend Setter", desc: "Eclectic urban wear that breaks traditional fashion boundaries.", img: "https://images.unsplash.com/photo-1523381235212-d73f80385227?auto=format&fit=crop&q=80&w=400" }
        },
        elegant: {
            male: { title: "Classic Gentleman", desc: "Sharp tailoring, fine wools, and timeless leather craftsmanship.", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400" },
            female: { title: "Timeless Grace", desc: "Flowing dresses, pearl details, and a focus on feminine elegance.", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=400" },
            other: { title: "Refined Soul", desc: "Sophisticated ensembles featuring luxurious fabrics and sharp cuts.", img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=400" }
        },
        sporty: {
            male: { title: "Performance Pro", desc: "Innovative athletic gear that looks good at the gym or on the street.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400" },
            female: { title: "Atheisure Chic", desc: "Sculpting tech-fabrics paired with functional, stylish outer layers.", img: "https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=400" },
            other: { title: "Dynamic Active", desc: "Ergonomic designs that keep up with your high-energy lifestyle.", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" }
        },
        creative: {
            male: { title: "Artistic Vision", desc: "Mixed patterns, vintage layers, and meaningful artisan accessories.", img: "https://images.unsplash.com/photo-1503910321442-7fefb2823b4d?auto=format&fit=crop&q=80&w=400" },
            female: { title: "Bohemian Muse", desc: "Free-flowing fabrics, intricate prints, and a touch of vintage whimsey.", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=400" },
            other: { title: "Creative Spirit", desc: "Unique, hand-picked garments that tell a story of artistic expression.", img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=400" }
        },
        experimental: {
            male: { title: "Future Forward", desc: "Metallic finishes, unusual cuts, and high-impact futuristic style.", img: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&w=400" },
            female: { title: "Avant-Garde Queen", desc: "Structural, boundary-pushing pieces that redefine wearable art.", img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=400" },
            other: { title: "Cosmic Explorer", desc: "Bold, otherworldly silhouettes that challenge fashion norms.", img: "https://images.unsplash.com/photo-1481016570479-9eab6349fde7?auto=format&fit=crop&q=80&w=400" }
        }
    },
    nightRoutine: {
        calm: "Soothing Lavender Mask",
        bold: "Retinol resurfacing",
        natural: "Simple Squalane Oil",
        mysterious: "Probiotic Night Mask",
        energetic: "Vitamin C Brightening"
    }
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

function showStep(n) {
    const steps = document.querySelectorAll('.form-step');
    steps.forEach(step => step.classList.remove('active'));
    steps[n].classList.add('active');

    currentStep = n;

    // Update header info
    stepCount.innerText = `Step ${currentStep + 1} of ${steps.length}`;
    progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.nextStep = () => {
    if (validateStep(currentStep)) {
        const steps = document.querySelectorAll('.form-step');
        if (currentStep < steps.length - 1) {
            showStep(currentStep + 1);
        }
    }
};

window.prevStep = () => {
    if (currentStep > 0) {
        showStep(currentStep - 1);
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
    } else if (n === 1) { // Step 2: Body Type
        if (!userSelections.bodyType) {
            showError(n, "Please select your body type.");
            return false;
        }
    } else if (n === 3) { // Step 4: Skin Profile
        const skinType = document.getElementById('skinType').value;
        const skinTone = document.getElementById('skinTone').value;
        const undertone = document.getElementById('undertone').value;

        if (!skinType || !skinTone || !undertone) {
            showError(n, "Please complete all skin profile fields.");
            return false;
        }
        userSelections.skinType = skinType;
        userSelections.skinTone = skinTone;
        userSelections.undertone = undertone;
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
    const report = {
        title: "🧴 Skincare Intelligence",
        theme: `Your ${type} skin is a canvas that loves **hydration and targeted balance**.`,
        morning: [],
        night: [],
        ingredients: [],
        tip: ""
    };

    if (concerns.includes('acne')) {
        report.ingredients = ["Salicylic Acid", "Niacinamide", "Zinc"];
        report.tip = "Focus on barrier repair; over-cleansing can actually trigger more oil.";
        report.morning.push({ title: "Gentle Foaming Cleanser", desc: "Balance pH without stripping.", img: "https://images.unsplash.com/photo-1556228515-91953bc029bb?auto=format&fit=crop&q=80&w=400", why: "Prevents bacterial growth while keeping moisture locked in." });
    } else if (age === 'mature' || age === 'senior' || concerns.includes('fine_lines')) {
        report.ingredients = ["Retinol", "Peptides", "Ceramides"];
        report.tip = "Massage items upward to support lymphatic drainage and skin elasticity.";
        report.night.push({ title: "Renewal Retinoid", desc: "Nightly cell turnover boost.", img: "https://images.unsplash.com/photo-1594465919760-441fe5908ab0?auto=format&fit=crop&q=80&w=400", why: "Diminishes fine lines and improves skip texture overnight." });
    } else {
        report.ingredients = ["Vitamin C", "Hyaluronic Acid"];
        report.tip = "Consistency is key. 10 minutes of self-care daily transforms your skin.";
        report.morning.push({ title: "Brightening Glow Serum", desc: "Anti-oxidant shield.", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=400", why: "Protects against urban pollution and brightens tone." });
    }

    return report;
}

function getHaircareBlueprint(type, concerns, thickness) {
    const report = {
        title: "💇 Haircare Blueprint",
        theme: `Your **${thickness} ${type} hair** thrives on meticulous care and minimal heat.`,
        recommendations: [],
        advice: ""
    };

    if (concerns.includes('hairfall')) {
        report.advice = "Avoid tight hairstyles and focus on scalp stimulation.";
        report.recommendations.push({ title: "Stimulating Scalp Oil", desc: "Rosmary & Peppermint blend.", why: "Increases blood flow to follicles to support new growth.", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400" });
    } else if (concerns.includes('frizz') || concerns.includes('dryness')) {
        report.advice = "Switch to a silk pillowcase to reduce mechanical friction.";
        report.recommendations.push({ title: "Intense Moisture Mask", desc: "Shea butter base.", why: "Seals the cuticle to prevent moisture evaporation.", img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?auto=format&fit=crop&q=80&w=400" });
    } else {
        report.advice = "A cool water rinse at the end of your shower adds instant shine.";
        report.recommendations.push({ title: "Weightless Volume Wash", desc: "Biotin infused.", why: "Provides lift without residue.", img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90?auto=format&fit=crop&q=80&w=400" });
    }

    return report;
}

window.generateResults = () => {
    if (validateStep(currentStep)) {
        showLoading(() => {
            const { gender, age, bodyType, style, favoriteColor, skinType, skinTone, undertone, skinConcern, hairType, scalpType, thickness, hairConcern, overallConcerns } = userSelections;

            const styleRec = getStyleIdentity(style, bodyType, gender, age, favoriteColor);
            const skinRec = getSkincareIntelligence(skinType, skinConcern, skinTone, age);
            const hairRec = getHaircareBlueprint(hairType, hairConcern, thickness);

            const reportHTML = `
                <div class="identity-report-header fade-in">
                    <p class="report-subtitle">Personalized AI Identity Report</p>
                    <h2 class="report-main-title">The ${gender.charAt(0).toUpperCase() + gender.slice(1)} Vision</h2>
                </div>

                <div class="report-section reveal-step" style="--d: 0.1s">
                    <div class="section-badge">${styleRec.title}</div>
                    <p class="section-theme">${styleRec.theme}</p>
                    <div class="rec-grid">
                        ${styleRec.outfits.map(o => createPremiumCard(o)).join('')}
                    </div>
                    <div class="palette-container" style="margin-top: 2rem;">
                        <p style="font-weight: 600; margin-bottom: 1rem;">Power Palette:</p>
                        <div style="display: flex; gap: 0.8rem;">
                            ${styleRec.palette.map(c => `<div class="color-swatch-large" style="background: ${c}" title="${c}"></div>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="report-section reveal-step" style="--d: 0.3s">
                    <div class="section-badge">${skinRec.title}</div>
                    <p class="section-theme">${skinRec.theme}</p>
                    <div class="ingredients-cloud">
                        ${skinRec.ingredients.map(i => `<span class="ingredient-tag">${i}</span>`).join('')}
                    </div>
                    <div class="rec-grid">
                        ${[...skinRec.morning, ...skinRec.night].map(s => createPremiumCard(s)).join('')}
                    </div>
                    <div class="lifestyle-note">💡 <strong>AI Tip:</strong> ${skinRec.tip}</div>
                </div>

                <div class="report-section reveal-step" style="--d: 0.5s">
                    <div class="section-badge">${hairRec.title}</div>
                    <p class="section-theme">${hairRec.theme}</p>
                    <div class="rec-grid">
                        ${hairRec.recommendations.map(h => createPremiumCard(h)).join('')}
                    </div>
                    <div class="lifestyle-note">💠 <strong>Advice:</strong> ${hairRec.advice}</div>
                </div>

                <div class="report-section reveal-step" style="--d: 0.7s">
                    <div class="section-badge">🌟 Confidence Boost</div>
                    <div class="confidence-box">
                        <p class="confidence-quote">"${getConfidenceTip(overallConcerns, age)}"</p>
                    </div>
                </div>
            `;

            resultContent.innerHTML = reportHTML;
            switchSection(quizSection, resultSection);

            // Trigger confetti for the "report" reveal
            if (typeof confetti !== 'undefined') {
                confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            }
        });
    }
};

function createPremiumCard(data) {
    return `
        <div class="premium-rec-card">
            <div class="card-img-wrapper">
                <img src="${data.img}" alt="${data.title}">
                <div class="why-badge">Why it suits you</div>
            </div>
            <div class="card-content">
                <h3>${data.title}</h3>
                <p class="card-desc">${data.desc}</p>
                <div class="why-text">${data.why}</div>
            </div>
        </div>
    `;
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

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI
    const steps = document.querySelectorAll('.form-step');
    stepCount.innerText = `Step 1 of ${steps.length}`;
    progressFill.style.width = `${(1 / steps.length) * 100}%`;
});

// Utility to show loading before results
function showLoading(callback) {
    const originalContent = quizForm.innerHTML;
    quizForm.innerHTML = `
        <div class="loading-container fade-in" style="flex-direction: column; display: flex; align-items: center; justify-content: center; min-height: 300px;">
            <div class="loader"></div>
            <p style="margin-top: 2rem; font-weight: 600; color: #6c5ce7; font-size: 1.2rem;">Our AI is analyzing your profile...</p>
        </div>
    `;
    setTimeout(() => {
        quizForm.innerHTML = originalContent;
        callback();
    }, 1500);
}
