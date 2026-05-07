function goToConverter() {
    // 1. מציאים את דף הלוגין ומעלמים אותו
    document.getElementById("loginPage").style.display = "none";
    
    // 2. מוציאים את דף המחשבון ומראים אותו
    document.getElementById("converterPage").style.display = "block";
}