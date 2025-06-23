
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('game');
const token = urlParams.get('token');
if (!gameId || !token) {
    alert("חסרים נתונים בקישור – ודא שקיבלת קישור תקין ממחולל הקישורים.");
    throw new Error("Missing game or token");
}
const AGORA_CONFIG = {
    appId: "517f71a5aa8a45a8a222341136c439c4",
    channel: gameId,
    token: token,
    uid: null
};
