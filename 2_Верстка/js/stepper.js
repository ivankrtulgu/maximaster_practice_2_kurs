const stepperEls = document.querySelectorAll(".stepper")


if (stepperEls) {
    stepperEls.forEach(stepperEl => {
        const stepperInputEl = stepperEl.querySelector(".stepper__count");
        const stepperButtonPlusEl = stepperEl.querySelector(".stepper__plus");
        const stepperButtonMinusEl = stepperEl.querySelector(".stepper__minus");
    
        let count = Number(stepperInputEl.value);
        let stepperMin = Number(stepperInputEl.getAttribute("min"));
        let stepperMax = Number(stepperInputEl.getAttribute("max"));
        
        stepperInputEl.addEventListener('change', () => {
            stepperButtonPlusEl.disabled = false;
            stepperButtonMinusEl.disabled = false;
            if (Number(stepperInputEl.value) > stepperMax){
                stepperInputEl.value = stepperMax;
                stepperButtonPlusEl.disabled = true;
            }
            if (Number(stepperInputEl.value) < stepperMin){
                stepperInputEl.value = stepperMin;
                stepperButtonMinusEl.disabled = true;

            }
        })
    
        stepperButtonPlusEl.addEventListener('click', () => {
            stepperButtonPlusEl.disabled = false;
            stepperButtonMinusEl.disabled = false;
            count++;
            stepperInputEl.value = count;
            if (count + 1 > stepperMax){
                stepperButtonPlusEl.disabled = true;
            }
        })
    
        stepperButtonMinusEl.addEventListener('click', () => {
            stepperButtonPlusEl.disabled = false;
            stepperButtonMinusEl.disabled = false;
            count--;
            stepperInputEl.value = count;
            if (count - 1 < stepperMin){
                stepperButtonMinusEl.disabled = true;
            }
        })
    })

}
