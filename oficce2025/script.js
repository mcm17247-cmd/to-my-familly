// تعريف الرسائل الخاصة لكل فرد
const messages = {
    mother: {
        title: "رسالة إلى أمي الحبيبة ❤️",
        text: "أمي، أنتِ الأمان والدفء في حياتي. كل الشكر والحب لكِ على كل ما قدمته."
    },
    father: {
        title: "رسالة إلى أبي العزيز 🛡️",
        text: "أبي، أنتَ القوة والسند. أتعلم منك كل يوم كيف أكون أفضل."
    },
    brother: {
        title: "رسالة إلى أخي 🤝",
        text: "أخي، أنتَ أفضل صديق ورفيق درب. أدعو الله أن يوفقك دائمًا."
    },
    sister: {
        title: "رسالة إلى أختي 👭",
        text: "أختي، أنتِ سري وضحكتي. أتمنى لكِ السعادة دائمًا."
    },
    grandmother: {
        title: "رسالة إلى جدتي الغالية 👵",
        text: "جدتي، حكاياتك ودفء حضنك لا يُنسى. أدعو الله أن يمنحك الصحة وطول العمر."
    }
};

// وظيفة عرض النافذة المنبثقة
function showMessage(familyMember) {
    const popup = document.getElementById('message-popup');
    const title = document.getElementById('popup-title');
    const text = document.getElementById('popup-text');

    // تحقق مما إذا كان العضو موجودًا في قائمة الرسائل
    if (messages[familyMember]) {
        title.textContent = messages[familyMember].title;
        text.textContent = messages[familyMember].text;
        popup.style.display = 'flex'; // لإظهار النافذة
    }
}

// وظيفة إخفاء النافذة المنبثقة
function closePopup() {
    const popup = document.getElementById('message-popup');
    popup.style.display = 'none';
}