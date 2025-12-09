document.getElementById("uploadBtn").addEventListener("click", () => {
    const video = document.getElementById("videoFile").files[0];
    const title = document.getElementById("titleInput").value;
    const desc = document.getElementById("descInput").value;

    if (!video) {
        alert("영상 파일을 선택해주세요!");
        return;
    }

    if (!title) {
        alert("제목을 입력해주세요!");
        return;
    }

    document.getElementById("resultBox").innerHTML =
        "⚠️ 현재 데모 버전입니다.<br>실제 유튜브 자동 업로드는 서버 연결 후 활성화됩니다.";
});
