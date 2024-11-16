// Data voor emoji's per categorie
const emojiData = {
  smileys: ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊','😇','🙂','🙃','😌','😍','🥰','😘','😗','😙','😚','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾'],
  animals: ['🐶','🐱','🐭','🐹','🐰','🦊','🦝','🐻','🐼','🦘','🦡','🐨','🐯','🦁','🐮','🐷','🐽','🐸','🐵','🙈','🙉','🙊','🐒','🐔','🐧','🐦','🐤','🐣','🐥','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦗','🕷','🕸','🦂','🐢','🐍','🦎','🦖','🦕','🐙','🦑','🦐','🦞','🦀','🐡','🐠','🐟','🐬','🐳','🐋','🦈','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🐃','🐂','🐄','🐎','🐖','🐏','🐑','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🕊','🐇','🐁','🐀','🐿','🦔'],
  nature: ['🌵','🎄','🌲','🌳','🌴','🌱','🌿','☘️','🍀','🎍','🎋','🍃','🍂','🍁','🍄','🌾','💐','🌷','🌹','🥀','🌺','🌸','🌼','🌻','🌞','🌝','🌛','🌜','🌚','🌕','🌖','🌗','🌘','🌑','🌒','🌓','🌔','🌙','🌎','🌍','🌏','💫','⭐','🌟','✨','⚡','☄️','💥','🔥','🌪','🌈','☀️','🌤','⛅','🌥','☁️','🌦','🌧','⛈','🌩','🌨','❄️','☃️','⛄','🌬','💨','💧','💦','☔','☂️','🌊','🌫'],
  food: ['🍏','🍎','🍐','🍊','🍋','🍌','🍉','🍇','🍓','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🥒','🥬','🌶','🌽','🥕','🥔','🍠','🥐','🍞','🥖','🥨','🥯','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🥙','🧆','🌮','🌯','🥗','🥘','🥫','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍚','🍘','🍥','🥮','🥠','🍢','🍡','🍧','🍨','🍦','🥧','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🧂'],
  activities: ['⚽','🏀','🏈','⚾','🎾','🏐','🏉','🥏','🎱','🪀','🏓','🏸','🥅','🏒','🏑','🥍','🏏','⛳','🏹','🎣','🤿','🥊','🥋','🎽','🛹','🛷','⛸','🥌','🎿','⛷','🏂','🪂','🏋️‍♀️','🏋️‍♂️','🤼‍♀️','🤼‍♂️','🤸‍♀️','🤸‍♂️','⛹️‍♀️','⛹️‍♂️','🤺','🤾‍♀️','🤾‍♂️','🏌️‍♀️','🏌️‍♂️','🏇','🧘‍♀️','🧘‍♂️','🏄‍♀️','🏄‍♂️','🏊‍♀️','🏊‍♂️','🤽‍♀️','🤽‍♂️','🚣‍♀️','🚣‍♂️','🧗‍♀️','🧗‍♂️','🚵‍♀️','🚵‍♂️','🚴‍♀️','🚴‍♂️','🏆','🎖','🏅','🥇','🥈','🥉','🎗','🏵','🎫','🎟'],
  travel: ['🚗','🚕','🚙','🚌','🚎','🏎','🚓','🚑','🚒','🚐','🛻','🚚','🚛','🚜','🏍','🛵','🦽','🦼','🛺','🚲','🛴','🛹','🚏','🛣','🛤','🛢','⛽','🚨','🚥','🚦','🛑','🚧','⚓','⛵','🛶','🚤','🛳','⛴','🛥','🚢','✈️','🛩','🛫','🛬','💺','🚁','🚟','🚠','🚡','🛰','🚀','🛸','🌌','🛎','🧳'],
  objects: ['⌚','📱','📲','💻','⌨️','🖥','🖨','🖱','🖲','🕹','🗜','💽','💾','💿','📀','📼','📷','📸','📹','🎥','📽','🎞','📞','☎️','📟','📠','📺','📻','🎙','🎚','🎛','⏱','⏲','⏰','🕰','⌛','⏳','📡','🔋','🔌','💡','🔦','🕯','🪔','🧯','🛢','💸','💵','💴','💶','💷','💰','💳','💎','⚖️','🪙','🔧','🔨','⚒️','🛠','⛏','🔩','⚙️','🗜','⚗','🔬','🔭','📡','💉','💊','🩸','🩹','🩺','🚪','🛏','🛋','🪑','🚽','🚿','🛁','🪠','🧴','🧷','🧹','🧺','🧻','🧼','🪒','🧽','🧯','🛒'],
  symbols: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','❤️‍🩹','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','🕉️','☸️','✡️','🔯','🕎','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','🆔','⚛️','🉑','☢️','☣️','📴','📳','🈶','🈚','🈸','🈺','🈷️','✴️','🆚','💮','🉐','㊙️','㊗️','🈴','🈵','🈹','🈲','🅰️','🅱️','🆎','🆑','🅾️','🆘','❌','⭕','🛑','⛔','📛','🚫','💯','💢','♨️','🚷','🚯','🚳','🚱','🔞','📵','🚭','❗','❕','❓','❔','‼️','⁉️','🔅','🔆','〽️','⚠️','🚸','🔱','⚜️','🔰','♻️','✅','🈯','💹','❇️','✳️','❎','🌐','💠','Ⓜ️','🌀','💤','🏧','🚾','♿','🅿️','🛗','🈳','🈂️','🛂','🛃','🛄','🛅','🚹','🚺','🚼','🚻','🚮','🎦','📶','🈁','🔣','ℹ️','🔤','🔡','🔠','🆖','🆗','🆙','🆒','🆕','🆓','0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','🔢','#️⃣','*️⃣'],
  flags: ['🏳️','🏴','🏁','🚩','🏳️‍🌈','🏳️‍⚧️','🇦🇫','🇦🇱','🇩🇿','🇦🇸','🇦🇩','🇦🇴','🇦🇮','🇦🇶','🇦🇬','🇦🇷','🇦🇲','🇦🇼','🇦🇺','🇦🇹','🇦🇿','🇧🇸','🇧🇭','🇧🇩','🇧🇧','🇧🇾','🇧🇪','🇧🇿','🇧🇯','🇧🇲','🇧🇹','🇧🇴','🇧🇦','🇧🇼','🇧🇷','🇧🇳','🇧🇬','🇧🇫','🇧🇮','🇰🇭','🇨🇲','🇨🇦','🇨🇻','🇰🇾','🇨🇫','🇹🇩','🇨🇱','🇨🇳','🇨🇴','🇰🇲','🇨🇩','🇨🇬','🇨🇷','🇨🇮','🇭🇷','🇨🇺','🇨🇾','🇨🇿','🇩🇰','🇩🇯','🇩🇲','🇩🇴','🇪🇨','🇪🇬','🇸🇻','🇬🇶','🇪🇷','🇪🇪','🇸🇿','🇪🇹','🇫🇯','🇫🇮','🇫🇷','🇬🇫','🇵🇫','🇬🇦','🇬🇲','🇬🇪','🇩🇪','🇬🇭','🇬🇷','🇬🇱','🇬🇩','🇬🇺','🇬🇹','🇬🇳','🇬🇼','🇬🇾','🇭🇹','🇭🇳','🇭🇰','🇭🇺','🇮🇸','🇮🇳','🇮🇩','🇮🇷','🇮🇶','🇮🇪','🇮🇱','🇮🇹','🇯🇲','🇯🇵','🇯🇴','🇰🇿','🇰🇪','🇰🇮','🇽🇰','🇰🇼','🇰🇬','🇱🇦','🇱🇻','🇱🇧','🇱🇸','🇱🇷','🇱🇾','🇱🇮','🇱🇹','🇱🇺','🇲🇴','🇲🇰','🇲🇬','🇲🇼','🇲🇾','🇲🇻','🇲🇱','🇲🇹','🇲🇭','🇲🇶','🇲🇷','🇲🇺','🇲🇽','🇫🇲','🇲🇩','🇲🇨','🇲🇳','🇲🇪','🇲🇸','🇲🇦','🇲🇿','🇲🇲','🇳🇦','🇳🇷','🇳🇵','🇳🇱','🇳🇨','🇳🇿','🇳🇮','🇳🇪','🇳🇬','🇳🇺','🇰🇵','🇲🇵','🇳🇴','🇴🇲','🇵🇰','🇵🇼','🇵🇸','🇵🇦','🇵🇬','🇵🇾','🇵🇪','🇵🇭','🇵🇱','🇵🇹','🇵🇷','🇶🇦','🇷🇴','🇷🇺','🇷🇼','🇼🇸','🇸🇲','🇸🇦','🇸🇳','🇷🇸','🇸🇨','🇸🇱','🇸🇬','🇸🇰','🇸🇮','🇸🇧','🇸🇴','🇿🇦','🇰🇷','🇸🇸','🇪🇸','🇱🇰','🇸🇩','🇸🇷','🇸🇪','🇨🇭','🇸🇾','🇹🇼','🇹🇯','🇹🇿','🇹🇭','🇹🇬','🇹🇴','🇹🇹','🇹🇳','🇹🇷','🇹🇲','🇹🇻','🇺🇬','🇺🇦','🇦🇪','🇬🇧','🇺🇸','🇺🇾','🇺🇿','🇻🇺','🇻🇦','🇻🇪','🇻🇳','🇾🇪','🇿🇲','🇿🇼'],
};

// Lijst van categorienamen
let categories = Object.keys(emojiData);
let currentCategoryIndex = 0;

// Variabelen voor drag-and-drop functionaliteit
let draggedEmoji = null;
let draggedEmojiClone = null;
let currentDroppable = null;
let autoScrollInterval = null;

// Error Logging Functie
function logError(eventType, message, details = {}) {
  console.error(`Error [${eventType}]: ${message}`, details);
}

// Laad emoji's in de emoji-grid
function loadEmojis(category) {
  try {
    const emojiGrid = document.getElementById('emoji-grid');
    emojiGrid.innerHTML = ''; // Verwijder bestaande emoji's
    const emojis = emojiData[category];

    // Maak en voeg emoji-items toe
    emojis.forEach(emojiChar => {
      const emojiItem = createEmojiItem(emojiChar);
      emojiGrid.appendChild(emojiItem);
    });

    // Werk de categorienaam bij
    const categoryNameDisplay = document.getElementById('category-name');
    categoryNameDisplay.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  } catch (error) {
    logError('loadEmojis', 'Kon emoji\'s voor categorie niet laden.', { category, error });
  }
}

// Maak een emoji-item element
function createEmojiItem(emojiChar) {
  const emojiItem = document.createElement('div');
  emojiItem.classList.add('emoji-item');
  emojiItem.textContent = emojiChar;

  // Maak de emoji sleepbaar
  emojiItem.setAttribute('draggable', 'true');

  // Touch event listeners voor drag-and-drop
  emojiItem.addEventListener('touchstart', handleDragStart, false);
  emojiItem.addEventListener('touchmove', handleDragMove, false);
  emojiItem.addEventListener('touchend', handleDragEnd, false);

  // Mouse event listeners voor desktop
  emojiItem.addEventListener('mousedown', handleMouseDown, false);

  return emojiItem;
}

// Navigatie tussen categorieën
function navigateCategory(direction) {
  try {
    if (direction === 'prev') {
      currentCategoryIndex = (currentCategoryIndex - 1 + categories.length) % categories.length;
    } else if (direction === 'next') {
      currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    }
    const newCategory = categories[currentCategoryIndex];
    loadEmojis(newCategory);
  } catch (error) {
    logError('navigateCategory', 'Kon niet navigeren tussen categorieën.', { direction, error });
  }
}

// Event listeners voor navigatieknoppen
document.getElementById('prev-category').addEventListener('click', () => navigateCategory('prev'));
document.getElementById('next-category').addEventListener('click', () => navigateCategory('next'));

// Drag-and-Drop Handlers voor Touch Apparaten
function handleDragStart(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Positioneer de clone op het touchpunt
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Haptische feedback
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  } catch (error) {
    logError('handleDragStart', 'Fout tijdens drag start.', { error });
  }
}

function handleDragMove(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    const touch = e.touches[0];
    updateDraggedEmojiPosition(touch);

    // Auto-scroll functionaliteit
    const viewportHeight = window.innerHeight;
    const scrollThreshold = 50;

    if (touch.clientY < scrollThreshold) {
      startAutoScroll('up');
    } else if (touch.clientY > viewportHeight - scrollThreshold) {
      startAutoScroll('down');
    } else {
      stopAutoScroll();
    }

    // Krijg het element onder het touchpunt
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder, .sector-notation');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('highlight');
        currentDroppable.classList.remove('magnet-active');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable && currentDroppable.classList.contains('emoji-placeholder')) {
        currentDroppable.classList.add('highlight');
      }
    }

    // Magneet Effect: Controleer nabijheid en pas positie aan
    if (currentDroppable && currentDroppable.classList.contains('emoji-placeholder')) {
      const placeholderRect = currentDroppable.getBoundingClientRect();
      const distance = getDistance(
        touch.clientX,
        touch.clientY,
        placeholderRect.left + placeholderRect.width / 2,
        placeholderRect.top + placeholderRect.height / 2
      );
      const magnetThreshold = 50; // Pixels

      if (distance < magnetThreshold) {
        currentDroppable.classList.add('magnet-active');
        // Pas de clone's positie lichtjes aan naar het midden
        const deltaX = (placeholderRect.left + placeholderRect.width / 2 - touch.clientX) / 10;
        const deltaY = (placeholderRect.top + placeholderRect.height / 2 - touch.clientY) / 10;
        draggedEmojiClone.style.left = `${touch.clientX - draggedEmojiClone.offsetWidth / 2 + deltaX}px`;
        draggedEmojiClone.style.top = `${touch.clientY - draggedEmojiClone.offsetHeight / 2 + deltaY}px`;

        // Haptische feedback bij het betreden van magneetbereik
        if (distance < magnetThreshold && !draggedEmojiClone.hasVibrated) {
          if (navigator.vibrate) {
            navigator.vibrate(30);
          }
          draggedEmojiClone.hasVibrated = true;
        }
      } else {
        currentDroppable.classList.remove('magnet-active');
        draggedEmojiClone.hasVibrated = false;
      }
    }
  } catch (error) {
    logError('handleDragMove', 'Fout tijdens drag move.', { error });
  }
}

function handleDragEnd(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    draggedEmojiClone.remove();
    draggedEmojiClone = null;

    // Stop eventuele lopende auto-scroll
    stopAutoScroll();

    if (currentDroppable && currentDroppable.classList.contains('emoji-placeholder')) {
      // Plaats de emoji in het midden van de placeholder
      currentDroppable.textContent = draggedEmoji.textContent;
      currentDroppable.classList.remove('highlight');
      currentDroppable.classList.remove('magnet-active');

      // Controleer of alle placeholders zijn ingevuld in de huidige sector
      const sector = currentDroppable.closest('.sector');
      if (sector) {
        const placeholders = sector.querySelectorAll('.emoji-placeholder');
        const allFilled = Array.from(placeholders).every(
          placeholder => placeholder.textContent.trim() !== ''
        );
        if (allFilled) {
          const checkButton = sector.querySelector('.check-button');
          checkButton.classList.add('checked');
        }
      }
    }

    draggedEmoji = null;
    currentDroppable = null;
  } catch (error) {
    logError('handleDragEnd', 'Fout tijdens drag end.', { error });
  }
}

// Mouse Event Handlers voor Desktop Ondersteuning
function handleMouseDown(e) {
  try {
    e.preventDefault();
    e.stopPropagation();
    draggedEmoji = e.target;
    draggedEmojiClone = draggedEmoji.cloneNode(true);
    draggedEmojiClone.classList.add('dragging-clone');
    document.body.appendChild(draggedEmojiClone);

    // Positioneer de clone op het muispunt
    updateDraggedEmojiPosition(e);

    // Mouse move en up handlers
    document.addEventListener('mousemove', handleMouseMove, false);
    document.addEventListener('mouseup', handleMouseUp, false);
  } catch (error) {
    logError('handleMouseDown', 'Fout tijdens muisklik.', { error });
  }
}

function handleMouseMove(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    updateDraggedEmojiPosition(e);

    const elementBelow = document.elementFromPoint(e.clientX, e.clientY);
    if (!elementBelow) return;

    const droppableBelow = elementBelow.closest('.emoji-placeholder, .sector-notation');

    if (currentDroppable !== droppableBelow) {
      if (currentDroppable) {
        currentDroppable.classList.remove('highlight');
        currentDroppable.classList.remove('magnet-active');
      }
      currentDroppable = droppableBelow;
      if (currentDroppable && currentDroppable.classList.contains('emoji-placeholder')) {
        currentDroppable.classList.add('highlight');
      }
    }

    // Magneet Effect: Controleer nabijheid en pas positie aan
    if (currentDroppable && currentDroppable.classList.contains('emoji-placeholder')) {
      const placeholderRect = currentDroppable.getBoundingClientRect();
      const distance = getDistance(
        e.clientX,
        e.clientY,
        placeholderRect.left + placeholderRect.width / 2,
        placeholderRect.top + placeholderRect.height / 2
      );
      const magnetThreshold = 50; // Pixels

      if (distance < magnetThreshold) {
        currentDroppable.classList.add('magnet-active');
        // Pas de clone's positie lichtjes aan naar het midden
        const deltaX = (placeholderRect.left + placeholderRect.width / 2 - e.clientX) / 10;
        const deltaY = (placeholderRect.top + placeholderRect.height / 2 - e.clientY) / 10;
        draggedEmojiClone.style.left = `${e.clientX - draggedEmojiClone.offsetWidth / 2 + deltaX}px`;
        draggedEmojiClone.style.top = `${e.clientY - draggedEmojiClone.offsetHeight / 2 + deltaY}px`;
      } else {
        currentDroppable.classList.remove('magnet-active');
      }
    }
  } catch (error) {
    logError('handleMouseMove', 'Fout tijdens muisbeweging.', { error });
  }
}

function handleMouseUp(e) {
  try {
    if (!draggedEmojiClone) return;

    e.preventDefault();
    e.stopPropagation();
    draggedEmojiClone.remove();
    draggedEmojiClone = null;

    if (currentDroppable && currentDroppable.classList.contains('emoji-placeholder')) {
      // Plaats de emoji in het midden van de placeholder
      currentDroppable.textContent = draggedEmoji.textContent;
      currentDroppable.classList.remove('highlight');
      currentDroppable.classList.remove('magnet-active');

      // Controleer of alle placeholders zijn ingevuld in de huidige sector
      const sector = currentDroppable.closest('.sector');
      if (sector) {
        const placeholders = sector.querySelectorAll('.emoji-placeholder');
        const allFilled = Array.from(placeholders).every(
          placeholder => placeholder.textContent.trim() !== ''
        );
        if (allFilled) {
          const checkButton = sector.querySelector('.check-button');
          checkButton.classList.add('checked');
        }
      }
    }

    draggedEmoji = null;
    currentDroppable = null;

    document.removeEventListener('mousemove', handleMouseMove, false);
    document.removeEventListener('mouseup', handleMouseUp, false);
  } catch (error) {
    logError('handleMouseUp', 'Fout tijdens muisknop loslaten.', { error });
  }
}

// Update de positie van de gesleepte emoji clone
function updateDraggedEmojiPosition(event) {
  try {
    let x, y;
    if (event.touches && event.touches.length > 0) {
      x = event.touches[0].clientX;
      y = event.touches[0].clientY;
    } else if (event.changedTouches && event.changedTouches.length > 0) {
      x = event.changedTouches[0].clientX;
      y = event.changedTouches[0].clientY;
    } else {
      x = event.clientX;
      y = event.clientY;
    }

    // Bereken de offset om de emoji precies onder de vinger te plaatsen
    const offsetX = draggedEmojiClone.offsetWidth / 2;
    const offsetY = draggedEmojiClone.offsetHeight / 2;

    // Positioneer de clone onder de cursor/vinger met offset
    draggedEmojiClone.style.left = `${x - offsetX}px`;
    draggedEmojiClone.style.top = `${y - offsetY}px`;
    draggedEmojiClone.style.position = 'fixed'; // Gebruik 'fixed' voor consistente positionering
    draggedEmojiClone.style.zIndex = 1000;
  } catch (error) {
    logError('updateDraggedEmojiPosition', 'Fout bij het updaten van de positie van de gesleepte emoji.', { error });
  }
}

// Auto-scroll functies bij slepen nabij de randen
function startAutoScroll(direction) {
  try {
    if (autoScrollInterval) return;

    autoScrollInterval = setInterval(() => {
      const scrollAmount = 20;
      if (direction === 'up') {
        window.scrollBy(0, -scrollAmount);
      } else if (direction === 'down') {
        window.scrollBy(0, scrollAmount);
      }
    }, 16); // Ongeveer 60fps
  } catch (error) {
    logError('startAutoScroll', 'Fout bij het starten van auto-scroll.', { direction, error });
  }
}

function stopAutoScroll() {
  try {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
  } catch (error) {
    logError('stopAutoScroll', 'Fout bij het stoppen van auto-scroll.', { error });
  }
}

// Bereken de afstand tussen twee punten
function getDistance(x1, y1, x2, y2) {
  const a = x1 - x2;
  const b = y1 - y2;
  return Math.sqrt(a * a + b * b);
}

// Update live tijdweergave
function updateLiveTime() {
  try {
    const liveTimeElement = document.getElementById('live-time');
    const now = new Date();
    liveTimeElement.textContent = now.toLocaleTimeString();
  } catch (error) {
    logError('updateLiveTime', 'Fout bij het updaten van de live tijd.', { error });
  }
}

// Sector Controle Knoppen
const checkButtons = document.querySelectorAll('.check-button');
checkButtons.forEach(button => {
  button.addEventListener('click', () => {
    try {
      button.classList.toggle('checked');
    } catch (error) {
      logError('checkButton', 'Fout bij het toggelen van de controleknop.', { button, error });
    }
  });
});

// Dag Beoordelingssysteem
const ratingCircle = document.getElementById('rating-circle');
const ratingButtons = document.getElementById('rating-buttons').querySelectorAll('.rating-button');

ratingCircle.addEventListener('click', () => {
  try {
    ratingCircle.style.display = 'none';
    ratingButtons.forEach(button => {
      button.style.display = 'block';
    });
  } catch (error) {
    logError('ratingCircle', 'Fout bij het weergeven van beoordelingsknoppen.', { error });
  }
});

ratingButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    try {
      ratingButtons.forEach((btn, idx) => {
        if (idx <= index) {
          btn.classList.add('selected');
        } else {
          btn.classList.remove('selected');
        }
      });
    } catch (error) {
      logError('ratingButton', 'Fout bij het selecteren van beoordeling.', { button, index, error });
    }
  });
});

// Reset Knop Functionaliteit
document.getElementById('reset-button').addEventListener('click', () => {
  try {
    // Verwijder emoji's uit placeholders
    const placeholders = document.querySelectorAll('.emoji-placeholder');
    placeholders.forEach(placeholder => {
      placeholder.textContent = '';
    });

    // Reset sector controles
    checkButtons.forEach(button => {
      button.classList.remove('checked');
    });

    // Reset dagbeoordeling
    ratingButtons.forEach(button => {
      button.classList.remove('selected');
      button.style.display = 'none';
    });
    ratingCircle.style.display = 'flex';

    // Wis tekstinvoervelden
    const textInputs = document.querySelectorAll('.sector-notation');
    textInputs.forEach(input => {
      input.value = '';
    });
  } catch (error) {
    logError('resetButton', 'Fout bij het resetten van de planner.', { error });
  }
});

// Initialiseer de applicatie
function init() {
  try {
    // Laad de standaard emoji categorie
    loadEmojis(categories[currentCategoryIndex]);

    // Update live tijd elke seconde
    updateLiveTime();
    setInterval(updateLiveTime, 1000);
  } catch (error) {
    logError('init', 'Fout bij het initialiseren van de applicatie.', { error });
  }
}

init();
