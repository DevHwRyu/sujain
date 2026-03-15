// --- DATA ---
const FLOOR_KEYS = ["1F", "2F", "3F", "4F", "5F", "5F+"];
const FLOOR_LABELS = {
    "1F": "1층", "2F": "2층", "3F": "3층", "4F": "4층",
    "5F": "5층", "5F+": "기준층",
};

const PRICE_TABLE = {
    "59A": { "1F": 513600000, "2F": 522000000, "3F": 527600000, "4F": 538700000, "5F": 549900000, "5F+": 558300000 },
    "59B": { "1F": 512800000, "2F": 521100000, "3F": 526700000, "4F": 537800000, "5F": 548800000, "5F+": 557200000 },
    "84": { "1F": 649100000, "2F": 659700000, "3F": 666700000, "4F": 680900000, "5F": 695000000, "5F+": 706500000 },
};

const INTERIM_DATES = [
    "2026-04-24", // 1차
    "2026-10-24", // 2차
    "2027-04-24", // 3차
    "2027-09-24", // 4차
    "2028-02-24", // 5차
    "2028-07-24"  // 6차
];

const OPTION_CATEGORIES = ["발코니확장", "IoT 시스템 에어컨", "천장형 공기청정기", "빌트인 가전", "빌트인 가구", "마감자재 특화", "태양열 차단필름"];

const SINGLE_SELECT_CATEGORIES = ["IoT 시스템 에어컨", "천장형 공기청정기", "시스템 청정환기"];

const EXCLUSIVE_GROUPS = {
    "oven_group": ["kitchen_oven_1", "kitchen_oven_2"],
    "kicthen_group": ["furniture_3", "furniture_4"],
    "materials_group": ["materials_2", "materials_3", "materials_4"],
};

// --- OPTION DATABASE ---
const COMMON_OPTS = [
    { id: "clean_1", category: "천장형 공기청정기", name: "천장형 공기청정기 2대 (거실, 침실1)", price: 2200000 },
    { id: "clean_2", category: "천장형 공기청정기", name: "천장형 공기청정기 4대 (거실, 침실1,2,3)", price: 4300000 },
    { id: "kitchen_1", category: "빌트인 가전", name: "빌트인 냉장고+김치냉장고+수납장", price: 6500000 },
    { id: "kitchen_2", category: "빌트인 가전", name: "식기세척기", price: 1100000 },
    { id: "kitchen_3", category: "빌트인 가전", name: "인덕션", price: 1200000 },
    { id: "kitchen_oven_1", category: "빌트인 가전", name: "빌트인 전기오븐 (일반형)", price: 350000 },
    { id: "kitchen_oven_2", category: "빌트인 가전", name: "빌트인 전기오븐 (고급형)", price: 850000 },
    { id: "furniture_1", category: "빌트인 가구", name: "현관 3연동 중문", price: 1300000 },
    { id: "furniture_11", category: "빌트인 가구", name: "욕실특화", price: 5000000 },
    { id: "furniture_12", category: "빌트인 가구", name: "다기능배기팬", price: 1200000 },
    { id: "materials_7", category: "마감자재 특화", name: "복도팬트리 도어 ", price: 500000 },
];

const TYPE_SPECIFIC_OPTS = {
    "59A": [
        { id: "balcony", category: "발코니확장", name: "발코니 확장", price: 5360000 },
        { id: "air_1", category: "IoT 시스템 에어컨", name: "시스템 에어컨 2대 (거실, 침실1)", price: 4000000 },
        { id: "air_2", category: "IoT 시스템 에어컨", name: "시스템 에어컨 4대 (거실, 침실1,2,3)", price: 6500000 },
        { id: "furniture_2", category: "빌트인 가구", name: "신발장 특화", price: 800000 },
        { id: "furniture_3", category: "빌트인 가구", name: "주방특화 (일반형)", price: 1900000 },
        { id: "furniture_4", category: "빌트인 가구", name: "주방특화 (고급형)", price: 4300000 },

        { id: "furniture_7", category: "빌트인 가구", name: "드레스룸 특화", price: 9000000 },
        { id: "furniture_8", category: "빌트인 가구", name: "침실2 붙박이장", price: 800000 },
        { id: "furniture_9", category: "빌트인 가구", name: "침실3 붙박이장", price: 1000000 },
        { id: "furniture_10", category: "빌트인 가구", name: "침실2,3 공간특화", price: 2500000 },

        { id: "materials_1", category: "마감자재 특화", name: "거실 아트월", price: 1500000 },
        { id: "materials_2", category: "마감자재 특화", name: "벽체마감특화 (일반형)", price: 2300000 },
        { id: "materials_3", category: "마감자재 특화", name: "벽체마감특화 (고급형)", price: 5000000 },
        { id: "materials_4", category: "마감자재 특화", name: "벽체마감특화 (고급형/침실2,3특화선택시)", price: 4200000 },
        { id: "materials_5", category: "마감자재 특화", name: "조명특화", price: 3700000 },
        { id: "materials_6", category: "마감자재 특화", name: "바닥특화", price: 3000000 },

        { id: "sunfilm", category: "태양열 차단필름", name: "태양열 차단필름", price: 2000000 },



    ],
    "59B": [
        { id: "balcony", category: "발코니확장", name: "발코니 확장", price: 5330000 },
        { id: "air_1", category: "IoT 시스템 에어컨", name: "시스템 에어컨 2대 (거실, 침실1)", price: 4000000 },
        { id: "air_2", category: "IoT 시스템 에어컨", name: "시스템 에어컨 4대 (거실, 침실1,2,3)", price: 6500000 },

        { id: "furniture_2", category: "빌트인 가구", name: "신발장 특화", price: 800000 },
        { id: "furniture_3", category: "빌트인 가구", name: "주방특화 (일반형)", price: 1900000 },
        { id: "furniture_4", category: "빌트인 가구", name: "주방특화 (고급형)", price: 4300000 },

        { id: "furniture_7", category: "빌트인 가구", name: "드레스룸 특화", price: 9000000 },
        { id: "furniture_8", category: "빌트인 가구", name: "침실2 붙박이장", price: 800000 },
        { id: "furniture_9", category: "빌트인 가구", name: "침실3 붙박이장", price: 1000000 },
        { id: "furniture_10", category: "빌트인 가구", name: "침실2,3 공간특화", price: 2500000 },

        { id: "materials_1", category: "마감자재 특화", name: "거실 아트월", price: 1500000 },
        { id: "materials_2", category: "마감자재 특화", name: "벽체마감특화 (일반형)", price: 2300000 },
        { id: "materials_3", category: "마감자재 특화", name: "벽체마감특화 (고급형)", price: 5000000 },
        { id: "materials_4", category: "마감자재 특화", name: "벽체마감특화 (고급형/침실2,3특화선택시)", price: 4200000 },
        { id: "materials_5", category: "마감자재 특화", name: "조명특화", price: 3700000 },
        { id: "materials_6", category: "마감자재 특화", name: "바닥특화", price: 3000000 },

        { id: "sunfilm", category: "태양열 차단필름", name: "태양열 차단필름", price: 2000000 },

    ],
    "84": [
        { id: "balcony", category: "발코니확장", name: "발코니 확장", price: 6640000 },
        { id: "air_1", category: "IoT 시스템 에어컨", name: "시스템 에어컨 2대 (거실, 침실1)", price: 4200000 },
        { id: "air_2", category: "IoT 시스템 에어컨", name: "시스템 에어컨 4대 (거실, 침실1,2,3)", price: 7000000 },

        { id: "furniture_2", category: "빌트인 가구", name: "신발장 특화", price: 1100000 },
        { id: "furniture_3", category: "빌트인 가구", name: "주방특화 (일반형)", price: 2300000 },
        { id: "furniture_4", category: "빌트인 가구", name: "주방특화 (고급형)", price: 4700000 },
        { id: "furniture_5", category: "빌트인 가구", name: "주방 홈바", price: 2300000 },
        { id: "furniture_6", category: "빌트인 가구", name: "보조주방특화", price: 1200000 },
        { id: "furniture_7", category: "빌트인 가구", name: "드레스룸 특화", price: 12000000 },
        { id: "furniture_8", category: "빌트인 가구", name: "침실2 붙박이장", price: 1000000 },
        { id: "furniture_9", category: "빌트인 가구", name: "침실3 붙박이장", price: 1200000 },

        { id: "materials_1", category: "마감자재 특화", name: "거실 아트월", price: 1800000 },
        { id: "materials_2", category: "마감자재 특화", name: "벽체마감특화 (일반형)", price: 2800000 },
        { id: "materials_3", category: "마감자재 특화", name: "벽체마감특화 (고급형)", price: 5500000 },
        { id: "materials_5", category: "마감자재 특화", name: "조명특화", price: 4500000 },
        { id: "materials_6", category: "마감자재 특화", name: "바닥특화", price: 4000000 },

        { id: "sunfilm", category: "태양열 차단필름", name: "태양열 차단필름", price: 2200000 },

    ],
};

const APT_DATA = {
    "59A": { interestEstimate35: 14200000 },
    "59B": { interestEstimate35: 14100000 },
    "84": { interestEstimate35: 15808685 },
};

let currentState = {
    type: "84",
    floorId: "5F+",
    selectedOptions: new Set(),
    interestRate: 3.77,
    selfPayRounds: 0
};

// --- CORE FUNCTIONS ---
function initApp() {
    renderTypeButtons();
    renderFloorOptions();
    resetApp();
    loadStateFromUrl(); // Restore state if URL params exist
}

function resetApp() {
    currentState.type = "84";
    currentState.floorId = "5F+";
    currentState.interestRate = 3.77;
    currentState.selfPayRounds = 0;

    document.getElementById('self-pay-select').value = "0";
    document.getElementById('interest-rate-input').value = 3.77;
    document.getElementById('balance-date').value = "2029-04-30"; // Reset date

    resetOptions(currentState.type);
    renderTypeButtons();
    const floorSelect = document.getElementById('floor-select');
    if (floorSelect) floorSelect.value = currentState.floorId;
    updateSummary();
}

function resetOptions(type) {
    currentState.selectedOptions.clear();
    renderOptionsList();
}

function setType(type) {
    currentState.type = type;
    resetOptions(type);
    updateUI();
}

function updateFloor(floorId) {
    currentState.floorId = floorId;
    updateUI();
}

function updateSelfPayRounds(rounds) {
    currentState.selfPayRounds = parseInt(rounds) || 0;
    updateSummary();
}

function updateInterestRate(val) {
    currentState.interestRate = parseFloat(val) || 0;
    updateSummary();
}

function getMergedOptions(type) {
    let opts = [...COMMON_OPTS];
    if (TYPE_SPECIFIC_OPTS[type]) {
        opts = [...opts, ...TYPE_SPECIFIC_OPTS[type]];
    }
    return opts;
}

// Dynamic Price Logic for 84B
function getOptionPrice(opt) {

    return opt.price;
}

function isOptionDisabled(opt) {
    const is84C = currentState.type === "84C";
    const is84A = currentState.type === "84A";
    const selected = currentState.selectedOptions;

    if (is84C) {
        const hasPlanSpec = selected.has("plan_1") || selected.has("plan_2");
        if (hasPlanSpec) {
            if (["style_1", "store_1", "store_2", "store_4", "kitchen_2", "bath_2", "air_2", "clean_3"].includes(opt.id)) return true;
        } else {
            if (["kitchen_3", "bath_3", "air_3", "clean_2"].includes(opt.id)) return true;
        }
    }

    if (is84A) {
        if (selected.has("kitchen_2") && opt.id === "store_2") return true;
        if (selected.has("store_2") && opt.id === "kitchen_2") return true;
    }

    return false;
}

function toggleOption(id, category) {
    const currentOpts = getMergedOptions(currentState.type);

    if (SINGLE_SELECT_CATEGORIES.includes(category)) {
        if (!currentState.selectedOptions.has(id)) {
            currentOpts.forEach(o => {
                if (o.category === category && o.id !== id && currentState.selectedOptions.has(o.id)) {
                    currentState.selectedOptions.delete(o.id);
                }
            });
        }
    }

    for (const groupName in EXCLUSIVE_GROUPS) {
        const groupIds = EXCLUSIVE_GROUPS[groupName];
        if (groupIds.includes(id)) {
            if (!currentState.selectedOptions.has(id)) {
                groupIds.forEach(gid => {
                    if (gid !== id && currentState.selectedOptions.has(gid)) {
                        currentState.selectedOptions.delete(gid);
                    }
                });
            }
        }
    }

    if (currentState.selectedOptions.has(id)) {
        currentState.selectedOptions.delete(id);
    } else {
        currentState.selectedOptions.add(id);
    }

    renderOptionsList();
    updateSummary();
}

// --- SHARING FUNCTIONALITY ---
function copyShareUrl() {
    // Create a compact state object
    const stateObj = {
        t: currentState.type,
        f: currentState.floorId,
        o: Array.from(currentState.selectedOptions),
        r: currentState.interestRate,
        p: currentState.selfPayRounds,
        d: document.getElementById('balance-date').value || ""
    };

    try {
        // Encode to Base64
        // JSON.stringify -> btoa
        // Note: btoa works for ASCII strings. Our IDs and values are ASCII safe.
        const base64Str = btoa(JSON.stringify(stateObj));
        const shareUrl = `${window.location.origin}${window.location.pathname}?data=${base64Str}`;

        navigator.clipboard.writeText(shareUrl).then(() => {
            alert("현재 견적 설정이 URL로 복사되었습니다.\n원하는 곳에 붙여넣기(Ctrl+V)하여 공유하세요.");
        }).catch(err => {
            console.error('URL 복사 실패:', err);
            prompt("이 URL을 복사해서 공유하세요:", shareUrl);
        });
    } catch (e) {
        console.error("Url generation failed:", e);
        alert("URL 생성 중 오류가 발생했습니다.");
    }
}

function loadStateFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const dataParam = params.get('data');

    if (!dataParam) return;

    try {
        // Decode from Base64
        const jsonStr = atob(dataParam);
        const stateObj = JSON.parse(jsonStr);

        // Restore State
        if (stateObj.t && APT_DATA[stateObj.t]) {
            currentState.type = stateObj.t;
        }

        if (stateObj.f && FLOOR_KEYS.includes(stateObj.f)) {
            currentState.floorId = stateObj.f;
        }

        currentState.selectedOptions.clear();
        if (Array.isArray(stateObj.o)) {
            stateObj.o.forEach(id => currentState.selectedOptions.add(id));
        }

        if (stateObj.r !== undefined) {
            currentState.interestRate = parseFloat(stateObj.r);
            const rateInput = document.getElementById('interest-rate-input');
            if (rateInput) rateInput.value = currentState.interestRate;
        }

        if (stateObj.p !== undefined) {
            currentState.selfPayRounds = parseInt(stateObj.p);
            const paySelect = document.getElementById('self-pay-select');
            if (paySelect) paySelect.value = currentState.selfPayRounds;
        }

        if (stateObj.d) {
            const dateInput = document.getElementById('balance-date');
            if (dateInput) dateInput.value = stateObj.d;
        }

        // Update UI with restored state
        updateUI();

    } catch (e) {
        console.error("Failed to parse state from URL:", e);
        // Fail silently or notify user if needed
    }
}

// --- RENDERING ---
function formatMoney(num) {
    return new Intl.NumberFormat('ko-KR').format(num);
}

function formatMoneyShort(num) {
    return (num / 100000000).toFixed(2) + "억";
}

function renderTypeButtons() {
    const container = document.getElementById('type-buttons');
    if (!container) return;
    container.innerHTML = Object.keys(APT_DATA).map(type => `
                <button onclick="setType('${type}')" 
                    class="h-10 rounded-lg font-bold text-sm transition-all border flex items-center justify-center ${currentState.type === type
            ? 'bg-[#00486d] text-white border-[#00486d] shadow-md ring-2 ring-[#00486d] ring-offset-1'
            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
        }">
                    ${type}
                </button>
            `).join('');
}

function renderFloorOptions() {
    const select = document.getElementById('floor-select');
    if (!select) return;
    select.innerHTML = FLOOR_KEYS.map(key => `
                <option value="${key}">${FLOOR_LABELS[key]}</option>
            `).join('');
    select.value = currentState.floorId;
}

function renderOptionsList() {
    const container = document.getElementById('options-container');
    if (!container) return;

    const opts = getMergedOptions(currentState.type);

    let htmlContent = "";
    OPTION_CATEGORIES.forEach(cat => {
        const catOptions = opts.filter(o => o.category === cat);
        if (catOptions.length === 0) return;

        htmlContent += `<div class="bg-gray-50 px-4 py-2 text-xs font-bold text-gray-500 border-b border-gray-100 category-header flex items-center">${cat}</div>`;

        catOptions.forEach(opt => {
            const isSelected = currentState.selectedOptions.has(opt.id);
            const isDisabled = isOptionDisabled(opt);
            const price = getOptionPrice(opt); // Use dynamic price

            htmlContent += `
                    <div onclick="${isDisabled ? '' : `toggleOption('${opt.id}', '${opt.category}')`}" 
                         class="option-item p-4 cursor-pointer group hover:bg-gray-50 border-b border-gray-100 last:border-b-0 ${isSelected ? 'bg-[#e0f2f1]/50' : 'bg-white'} ${isDisabled ? 'option-disabled' : ''}">
                        <div class="flex items-center gap-3">
                            <div class="w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-all ${isSelected ? 'bg-[#00486d] border-[#00486d]' : 'border-gray-300 bg-white'}">
                                ${isSelected ? `<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>` : ''}
                            </div>
                            <div class="flex-1">
                                <div class="flex justify-between items-center">
                                    <span class="font-medium text-sm md:text-base ${isSelected ? 'text-gray-900' : 'text-gray-600'}">
                                        ${opt.name}
                                    </span>
                                    <span class="font-bold text-sm whitespace-nowrap ml-2 ${isSelected ? 'text-[#00486d]' : 'text-gray-400'}">${formatMoney(price)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
        });
    });
    container.innerHTML = htmlContent;
    document.getElementById('option-count-badge').innerText = `${currentState.selectedOptions.size}개 선택중`;
}

function calcAcquisitionTax(price) {
    let acqRate = 0;
    let formulaText = "";
    let rateDisplay = "";

    if (price <= 600000000) {
        acqRate = 1.1; // 1% + 0.1%
        formulaText = "6억 원 이하 (취득세 1% + 지방교육세 0.1%)";
        rateDisplay = "1.10";
    } else if (price <= 900000000) {
        // Formula: (Price * 2 / 300,000,000 - 3) * 1.1
        // Step 1: Acq Rate = (Price * 2 / 300000000 - 3)
        // Step 2: Total Rate = Acq Rate * 1.1
        const baseRate = (price * 2 / 300000000) - 3;
        // Round baseRate to 4 decimal places? Usually the final tax is calculated.
        // Standard formula often used: Rate(%) = (Price * 2/300mil - 3)
        const totalRate = baseRate * 1.1;
        acqRate = totalRate;

        // Format for display
        const rateForDisplay = totalRate.toFixed(2);
        rateDisplay = rateForDisplay;
        formulaText = `6억 초과 ~ 9억 이하 비례세율 적용\n[(${formatMoney(price)}원 × 2/3억원 - 3) × 1.1] ≒ ${rateForDisplay}%`;
    } else {
        acqRate = 3.3; // 3% + 0.3%
        formulaText = "9억 원 초과 (취득세 3% + 지방교육세 0.3%)";
        rateDisplay = "3.30";
    }

    const taxAmount = Math.floor(price * acqRate / 100);

    return {
        amount: taxAmount,
        rateDisplay: rateDisplay,
        formulaText: formulaText
    };
}

function updateSummary() {
    const floorBasedPrice = PRICE_TABLE[currentState.type][currentState.floorId] || 0;
    const currentOpts = getMergedOptions(currentState.type);
    let totalOptionPrice = 0;
    let selectedHtml = "";

    currentOpts.forEach(opt => {
        if (currentState.selectedOptions.has(opt.id)) {
            const price = getOptionPrice(opt);
            totalOptionPrice += price;
            selectedHtml += `<div class="flex justify-between"><span>- ${opt.name}</span><span>${formatMoney(price)}</span></div>`;
        }
    });

    const acquisitionValue = floorBasedPrice + totalOptionPrice;

    // Interest Calculation Logic
    // 1. Get Balance Date
    const balanceDateStr = document.getElementById('balance-date').value;
    const balanceDate = new Date(balanceDateStr);

    // 2. Loop Installments
    let totalInterest = 0;
    let interestHtml = "";
    const oneDay = 24 * 60 * 60 * 1000;

    // Assuming Installment is 10% of SUPPLY PRICE per round (Total 60%)
    const installmentAmount = floorBasedPrice * 0.1;

    INTERIM_DATES.forEach((dateStr, index) => {
        const roundNum = index + 1;
        // Check if this round is Self Paid
        // selfPayRounds = 2 means Round 1 and Round 2 are self paid.
        const isSelfPaid = roundNum <= currentState.selfPayRounds;

        let roundInterest = 0;
        let dayDiff = 0;
        let note = "";

        if (!isSelfPaid) {
            const payDate = new Date(dateStr);
            // Diff days
            const diffTime = balanceDate - payDate;
            dayDiff = Math.ceil(diffTime / oneDay);

            if (dayDiff > 0) {
                // Interest = Principal * Rate * Days / 365
                roundInterest = installmentAmount * (currentState.interestRate / 100) * (dayDiff / 365);
            }
        } else {
            note = "(자납)";
        }

        totalInterest += roundInterest;

        // Add to breakdown list
        if (roundInterest > 0 || isSelfPaid) {
            const displayAmt = isSelfPaid ? "0 원" : formatMoney(Math.floor(roundInterest)) + " 원";
            interestHtml += `
                        <div class="flex justify-between items-center ${isSelfPaid ? 'text-green-600' : ''}">
                            <span>${roundNum}회차 (${dateStr})</span>
                            <span class="text-right">
                                ${isSelfPaid ? note : `${dayDiff}일 / ${displayAmt}`}
                            </span>
                        </div>`;
        }
    });

    document.getElementById('interest-breakdown-list').innerHTML = interestHtml;

    // Tax & Totals
    const taxData = calcAcquisitionTax(acquisitionValue);
    // finalBudget는 HUG 보증료 계산 이후에 산출

    const setVal = (id, val) => { const el = document.getElementById(id); if (el) el.innerText = val; };

    setVal('val-base-price', `${formatMoney(floorBasedPrice)} 원`);
    setVal('val-option-price', `+ ${formatMoney(totalOptionPrice)} 원`);

    // Update Selected List
    const listEl = document.getElementById('selected-options-list');
    if (listEl) {
        if (totalOptionPrice > 0) {
            listEl.innerHTML = selectedHtml;
            listEl.classList.remove('hidden');
        } else {
            listEl.classList.add('hidden');
        }
    }

    setVal('summary-badge', `${currentState.type} / ${FLOOR_LABELS[currentState.floorId]}`);
    setVal('val-apt-contract', `${formatMoney(floorBasedPrice * 0.1)} 원`);
    setVal('val-apt-interim', `${formatMoney(floorBasedPrice * 0.6)} 원`);
    setVal('val-apt-balance', `${formatMoney(floorBasedPrice * 0.3)} 원`);

    setVal('val-opt-total-mini', `${formatMoney(totalOptionPrice)} 원`);
    setVal('val-opt-contract', `${formatMoney(totalOptionPrice * 0.1)} 원`);
    setVal('val-opt-balance', `${formatMoney(totalOptionPrice * 0.9)} 원`);

    setVal('val-total-contract', `${formatMoney(acquisitionValue)} 원`);
    setVal('val-interest', `${formatMoney(Math.floor(totalInterest))} 원`);
    document.getElementById('label-interest-rate').innerText = `(${currentState.interestRate}%)`;

    setVal('val-tax', `${formatMoney(taxData.amount)} 원`);
    document.getElementById('label-tax-rate').innerText = `(세율 약 ${taxData.rateDisplay}%)`;

    // Formula Display Update
    document.getElementById('tax-formula-display').innerText = taxData.formulaText;

    // 취득세 감면 계산 (택1)
    const selectedDiscount = document.querySelector('input[name="tax-discount"]:checked');
    const discountValue = selectedDiscount ? selectedDiscount.value : 'none';

    let taxDiscount = 0;
    let discountDetailsHtml = "";

    if (discountValue === 'first-home') {
        taxDiscount = 2000000;
        discountDetailsHtml = `<div class="flex justify-between"><span>생애최초 취득세 감면</span><span>- 2,000,000 원</span></div>`;
    } else if (discountValue === 'newborn') {
        taxDiscount = 5000000;
        discountDetailsHtml = `<div class="flex justify-between"><span>신생아 취득세 감면</span><span>- 5,000,000 원</span></div>`;
    }

    const taxAfterDiscount = Math.max(0, taxData.amount - taxDiscount);

    const taxDiscountDisplay = document.getElementById('tax-discount-display');
    const taxDiscountDetails = document.getElementById('tax-discount-details');
    const valTaxAfterDiscount = document.getElementById('val-tax-after-discount');

    if (taxDiscountDisplay && taxDiscountDetails && valTaxAfterDiscount) {
        if (taxDiscount > 0) {
            taxDiscountDisplay.classList.remove('hidden');
            taxDiscountDetails.innerHTML = discountDetailsHtml;
            valTaxAfterDiscount.innerText = `${formatMoney(taxAfterDiscount)} 원`;
        } else {
            taxDiscountDisplay.classList.add('hidden');
        }
    }

    // HUG 보증료 계산 (보증료 = 보증금액 × 보증료율(0.13%) × 보증기간일수 / 365)
    const hugInstallment = floorBasedPrice * 0.1; // 회차당 보증금액 = 분양가의 10%
    const hugRate = 0.0013; // 보증료율 0.13%
    let hugTotalFull = 0;
    let hugTotalFee40 = 0;
    let hugHtml = "";

    INTERIM_DATES.forEach((dateStr, index) => {
        const roundNum = index + 1;
        const isSelfPaid = roundNum <= currentState.selfPayRounds;

        let roundFeeFull = 0;
        let roundFee40 = 0;
        let dayDiff = 0;

        if (!isSelfPaid) {
            const payDate = new Date(dateStr);
            const diffTime = balanceDate - payDate;
            dayDiff = Math.ceil(diffTime / oneDay);

            if (dayDiff > 0) {
                roundFeeFull = Math.floor(hugInstallment * hugRate * dayDiff / 365);
                roundFee40 = Math.floor(roundFeeFull * 0.6);
            }
        }

        hugTotalFull += roundFeeFull;
        hugTotalFee40 += roundFee40;

        hugHtml += `
            <div class="flex justify-between items-center ${isSelfPaid ? 'text-green-600' : ''}">
                <span>${roundNum}회차 (${dateStr})</span>
                <span>${isSelfPaid ? '(자납)' : dayDiff + '일'}</span>
                <span>${isSelfPaid ? '-' : formatMoney(roundFeeFull) + ' 원'}</span>
                <span>${isSelfPaid ? '-' : formatMoney(roundFee40) + ' 원'}</span>
            </div>`;
    });

    const hugBreakdownEl = document.getElementById('hug-breakdown-list');
    if (hugBreakdownEl) hugBreakdownEl.innerHTML = hugHtml;
    setVal('val-hug-fee-full', `${formatMoney(hugTotalFull)} 원`);
    setVal('val-hug-fee-40', `${formatMoney(hugTotalFee40)} 원`);

    // 부가 지출 금액 = 중도금 대출 이자 + HUG 보증료(100%) + 취득세 (감면 적용)
    const finalTaxAmount = taxDiscount > 0 ? taxAfterDiscount : taxData.amount;
    const additionalCost = totalInterest + hugTotalFull + finalTaxAmount;
    setVal('val-total-short', formatMoneyShort(additionalCost));
    setVal('val-total-full', `${formatMoney(Math.floor(additionalCost))} 원`);
}

function updateUI() {
    renderTypeButtons();
    const floorSelect = document.getElementById('floor-select');
    if (floorSelect) floorSelect.value = currentState.floorId;
    renderOptionsList();
    updateSummary();
}

function printReport() { window.print(); }

// Robust Initialization
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
