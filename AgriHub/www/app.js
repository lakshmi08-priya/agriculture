// Toggle Soil Upload Section
function toggleSoilUpload() {
  const box = document.getElementById("soilUploadBox");
  box.style.display = (box.style.display === "none") ? "block" : "none";
}

function handleSoilFile(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById("soilResult").innerText = "✅ File selected: " + file.name;
  }
}

// Toggle Plant Upload Section
function togglePlantUpload() {
  const box = document.getElementById("plantUploadBox");
  box.style.display = (box.style.display === "none") ? "block" : "none";
}

function handlePlantFile(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById("plantResult").innerText = "✅ File selected: " + file.name;
  }
}
// Open chat box
function openChat() {
  document.getElementById("chatBox").style.display = "flex";

  // Focus on input when chat opens
  document.getElementById("chatMessageInput").focus();
}

// Send message
function sendMessage() {
  const input = document.getElementById("chatMessageInput");
  const message = input.value.trim();
  if (message === "") return;

  // Add user message
  const chatMessages = document.getElementById("chatMessages");
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = "👩‍🌾 You: " + message;
  chatMessages.appendChild(userMsg);

  // Auto reply (temporary)
  const reply = document.createElement("div");
  reply.className = "bot-msg";
  reply.textContent = "🤖 AgriBot: We'll get back to you about '" + message + "'";
  chatMessages.appendChild(reply);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;

  input.value = "";
}

// ✅ Allow pressing Enter to send
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chatMessageInput");
  if (input) {
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        event.preventDefault(); // prevent page reload
        sendMessage();
      }
    });
  }
});
const translations = {
  en: {
    title: "🌾 Our Features",
    soilTitle: "Soil Monitoring",
    soilDesc: "Check moisture, pH & nutrients for better yield.",
    plantTitle: "Plant Disease Detection",
    plantDesc: "AI-powered detection to protect crops early.",
    queryTitle: "Farmer Queries",
    queryDesc: "Get instant expert support for your farm.",
    queryBtn: "Ask a Question",
    alertTitle: "Smart Alerts",
    alertDesc: "Weather & pest alerts directly on your phone.",
    chatPlaceholder: "Type your question...",
    chatSubmit: "Submit",
    chatResponsePrefix: "✅ Your query:"
  },
  te: {
    title: "🌾 మా లక్షణాలు",
    soilTitle: "మట్టిని పరిశీలించడం",
    soilDesc: "మంచి పంటకు తేమ, pH & పోషకాలు తనిఖీ చేయండి.",
    plantTitle: "చెట్టు వ్యాధి గుర్తింపు",
    plantDesc: "పంటలను రక్షించడానికి AI ఆధారిత గుర్తింపు.",
    queryTitle: "రైతు ప్రశ్నలు",
    queryDesc: "మీ వ్యవసాయానికి తక్షణ నిపుణుల మద్దతు పొందండి.",
    queryBtn: "ప్రశ్న అడగండి",
    alertTitle: "స్మార్ట్ అలెర్ట్లు",
    alertDesc: "వాతావరణం & pests గురించి నేరుగా అప్లోడ్ చేయండి.",
    chatPlaceholder: "మీ ప్రశ్న టైప్ చేయండి...",
    chatSubmit: "సబ్మిట్ చేయండి",
    chatResponsePrefix: "✅ మీ ప్రశ్న పంపబడింది:"
  },
  hi: {
    title: "🌾 हमारी सुविधाएँ",
    soilTitle: "मिट्टी की निगरानी",
    soilDesc: "बेहतर फसल के लिए नमी, pH और पोषक तत्व जांचें।",
    plantTitle: "पौध रोग पहचान",
    plantDesc: "फसलों की सुरक्षा के लिए AI आधारित पहचान।",
    queryTitle: "किसान प्रश्न",
    queryDesc: "अपने खेत के लिए तुरंत विशेषज्ञ समर्थन प्राप्त करें।",
    queryBtn: "प्रश्न पूछें",
    alertTitle: "स्मार्ट अलर्ट",
    alertDesc: "मौसम और कीट अलर्ट सीधे आपके फ़ोन पर।",
    chatPlaceholder: "अपना प्रश्न टाइप करें...",
    chatSubmit: "सबमिट करें",
    chatResponsePrefix: "✅ आपका प्रश्न भेजा गया:"
  }
};

const lang = localStorage.getItem("selectedLanguage") || "en";

// Set feature texts
document.getElementById("title").innerText = translations[lang].title;
document.getElementById("soilTitle").innerText = translations[lang].soilTitle;
document.getElementById("soilDesc").innerText = translations[lang].soilDesc;
document.getElementById("soilBtn").innerText = translations[lang].soilBtn;
document.getElementById("plantTitle").innerText = translations[lang].plantTitle;
document.getElementById("plantDesc").innerText = translations[lang].plantDesc;
document.getElementById("plantBtn").innerText = translations[lang].plantBtn;
document.getElementById("queryTitle").innerText = translations[lang].queryTitle;
document.getElementById("queryDesc").innerText = translations[lang].queryDesc;
document.getElementById("queryBtn").innerText = translations[lang].queryBtn;
document.getElementById("alertTitle").innerText = translations[lang].alertTitle;
document.getElementById("alertDesc").innerText = translations[lang].alertDesc;

// Update chat box dynamically
function openChatPage() {
  window.location.href = "chat.html";
}
