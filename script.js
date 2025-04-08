document.getElementById("close-btn").addEventListener("click", function () {
    window.close();
});

document.getElementById("save-btn").addEventListener("click", function () {
    const text = document.getElementById("text-area").value;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "notepad.txt";
    link.click();
});

document.getElementById("text-area").addEventListener("input", function () {
    updateLineNumbers();
});

function updateLineNumbers() {
    const text = document.getElementById("text-area").value;
    const lines = text.split('\n').length;
    let lineNumbers = "";
    
    for (let i = 1; i <= lines; i++) {
        lineNumbers += i + "\n";
    }
    
    document.getElementById("line-numbers-textarea").value = lineNumbers;
}
