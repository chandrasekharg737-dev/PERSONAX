const quizData = {
    steps: [
        {
            title: "Select Your Gender",
            field: "gender",
            options: [
                { id: "male", label: "Male", icon: "👨" },
                { id: "female", label: "Female", icon: "👩" },
                { id: "other", label: "Prefer not to say", icon: "✨" }
            ]
        },
        {
            title: "Describe Your Personality",
            field: "personality",
            options: [
                { id: "calm", label: "Calm & Balanced", icon: "🧘" },
                { id: "bold", label: "Bold & Confident", icon: "🦁" },
                { id: "natural", label: "Natural & Minimal", icon: "🌿" },
                { id: "mysterious", label: "Deep & Mysterious", icon: "🌙" },
                { id: "energetic", label: "Energetic & Social", icon: "⚡" }
            ]
        },
        {
            title: "Your Skin Type",
            field: "skinType",
            options: [
                { id: "oily", label: "Oily", icon: "✨" },
                { id: "dry", label: "Dry", icon: "🌵" },
                { id: "combination", label: "Combination", icon: "🌓" },
                { id: "sensitive", label: "Sensitive", icon: "🌸" },
                { id: "normal", label: "Normal", icon: "✅" },
                { id: "acne", label: "Acne-prone", icon: "🧬" }
            ]
        },
        {
            title: "Your Hair Type",
            field: "hairType",
            options: [
                { id: "straight", label: "Straight", icon: "📏" },
                { id: "wavy", label: "Wavy", icon: "🌊" },
                { id: "curly", label: "Curly", icon: "🌀" },
                { id: "coily", label: "Coily", icon: "➰" }
            ]
        },
        {
            title: "Primary Hair Concern",
            field: "hairConcern",
            options: [
                { id: "hairfall", label: "Hair Fall", icon: "🍂" },
                { id: "dandruff", label: "Dandruff", icon: "❄️" },
                { id: "dryScalp", label: "Dry Scalp", icon: "🏜️" },
                { id: "oilyScalp", label: "Oily Scalp", icon: "💧" },
                { id: "frizz", label: "Frizz", icon: "☁️" },
                { id: "damage", label: "Heat Damage", icon: "🔥" }
            ]
        },
        {
            title: "Style Personality",
            field: "style",
            options: [
                { id: "minimal", label: "Minimal & Clean", icon: "⚪" },
                { id: "street", label: "Street & Trendy", icon: "🛹" },
                { id: "elegant", label: "Elegant & Classic", icon: "💎" },
                { id: "sporty", label: "Sporty & Active", icon: "👟" },
                { id: "creative", label: "Creative & Artistic", icon: "🎨" },
                { id: "experimental", label: "Bold & Experimental", icon: "🧪" }
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
    gender: null,
    personality: null,
    skinType: null,
    hairType: null,
    hairConcern: null,
    style: null
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
const quizStepContent = document.getElementById('quiz-step-content');
const progressFill = document.getElementById('progress-fill');
const stepCount = document.getElementById('step-count');
const resultContent = document.getElementById('result-content');

startBtn.addEventListener('click', () => {
    switchSection(homeSection, quizSection);
    renderStep();
});

restartBtn.addEventListener('click', () => {
    currentStep = 0;
    userSelections = { gender: null, personality: null, skinType: null, hairType: null, hairConcern: null, style: null };
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

function renderStep() {
    const data = quizData.steps[currentStep];
    stepCount.innerText = `Step ${currentStep + 1} of ${quizData.steps.length}`;
    progressFill.style.width = `${((currentStep + 1) / quizData.steps.length) * 100}%`;

    let html = `
        <h2 class="slide-in" style="margin-bottom: 2rem; color: #6c5ce7; font-size: 2rem;">${data.title}</h2>
        <div class="card-grid fade-in">
    `;

    data.options.forEach(option => {
        html += `
            <div class="option-card" data-id="${option.id}" onclick="handleSelection('${data.field}', '${option.id}')">
                <span class="option-icon" style="font-size: 3.5rem;">${option.icon}</span>
                <span class="option-label" style="font-weight: 600; font-size: 1.1rem;">${option.label}</span>
            </div>
        `;
    });

    html += `</div>`;
    quizStepContent.innerHTML = html;
}

window.handleSelection = (field, value) => {
    userSelections[field] = value;
    const cards = document.querySelectorAll('.option-card');
    cards.forEach(c => c.classList.remove('selected'));
    const selectedCard = document.querySelector(`[data-id="${value}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    setTimeout(() => {
        if (currentStep < quizData.steps.length - 1) {
            currentStep++;
            renderStep();
        } else {
            generateResults();
        }
    }, 600);
};

function createRecCard(data) {
    return `
        <div class="rec-card fade-in">
            <div class="rec-card-image" style="background-image: url('${data.img}')"></div>
            <div class="rec-card-info">
                <h4>${data.title}</h4>
                <p>${data.desc}</p>
            </div>
        </div>
    `;
}

function generateResults() {
    const { skinType, personality, hairType, hairConcern, style, gender } = userSelections;
    const genderKey = (gender === 'male' || gender === 'female') ? gender : 'other';
    const personaTitle = `${userSelections.personality.charAt(0).toUpperCase() + userSelections.personality.slice(1)} ${userSelections.style.charAt(0).toUpperCase() + userSelections.style.slice(1)} Icon`;

    const skinRecs = recommendations.skincare;
    const hairRecs = recommendations.haircare;
    const styleRec = recommendations.style[style][genderKey];

    let html = `
        <div class="fade-in" style="text-align: center; margin-bottom: 4rem;">
            <p style="font-size: 1.2rem; color: #636e72;">Found your ultimate vibe!</p>
            <h3 class="animated-title" style="font-size: 3.5rem; margin: 0.5rem 0;">${personaTitle}</h3>
        </div>
        
        <div class="result-category">
            <h4 class="category-title">✨ Skincare Hero Routine</h4>
            <div class="rec-grid">
                ${createRecCard(skinRecs.cleansers[skinType])}
                ${createRecCard(skinRecs.moisturizers[skinType])}
            </div>
        </div>

        <div class="result-category" style="margin-top: 4rem;">
            <h4 class="category-title">💇 Main Character Hair</h4>
            <div class="rec-grid">
                ${createRecCard(hairRecs.shampoo[hairConcern])}
                ${createRecCard({
        title: "Special Treatment",
        desc: "Apply to mid-lengths and ends for maximum shine and protection.",
        img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a3ef?auto=format&fit=crop&q=80&w=400"
    })}
            </div>
        </div>

        <div class="result-category" style="margin-top: 4rem;">
            <h4 class="category-title">🧥 Style Signature</h4>
            <div class="rec-grid solo-card">
                ${createRecCard(styleRec)}
            </div>
        </div>

        <div class="lifestyle-tip fade-in" style="margin-top: 5rem; background: white; color: #2d3436; box-shadow: 0 20px 50px rgba(0,0,0,0.05);">
            <h3 style="margin-bottom: 1rem; font-weight: 800; font-size: 1.5rem;">💡 Daily Energy Tip</h3>
            <p style="font-size: 1.2rem; line-height: 1.6; opacity: 0.8;">
                Since you're <strong>${personality}</strong>, try integrating small mindfulness rituals into your day to keep your internal baseline steady. Your skin will thank you!
            </p>
        </div>
    `;

    resultContent.innerHTML = html;
    switchSection(quizSection, resultSection);
}
