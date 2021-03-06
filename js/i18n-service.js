gTrans = {
    'gallery' : {
        en : 'Gallery',
        he : 'גלריה'
    },
    'memes' : {
        en : 'Memes',
        he : 'ממים'
    },
    'lang' : {
        en : 'עברית',
        he : 'English' 
    },
    'search' : {
        en : 'Search',
        he : 'חיפוש'
    },
    'funny' : {
        en : 'Funny',
        he : 'מצחיק'
    },
    'animal' : {
        en : 'Animal',
        he : 'חיות'
    },
    'men' : {
        en : 'Men',
        he : 'גברים'
    },
    'kids' : {
        en : 'Kids',
        he : 'ילדים'
    },
    'happy' : {
        en : 'Happy',
        he : 'שמח'
    },
    'president' : {
        en : 'President',
        he : 'נשיא'
    },
    'add-text-here' : {
        en : 'Add Text Here',
        he : 'הוסף טקסט כאן'
    },
    'share' : {
        en : 'Share',
        he : 'שתף'
    },
    'download' : {
        en : 'Download',
        he : 'הורדה'
    },
    'import-image' : {
        en : 'Import Image',
        he : 'ייבוא תמונה'
    },
    'bed' : {
        en : 'Bed',
        he : 'מיטה'
    }
}

gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'
    var txt = keyTrans[gCurrLang];
    if (!txt) return keyTrans.en
    return txt
}
function setLang() {
    if(gCurrLang === 'en'){
        gCurrLang = 'he';
        return;
    } 
    if(gCurrLang === 'he') gCurrLang = 'en';
}