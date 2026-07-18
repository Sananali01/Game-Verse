// Accessories
import mouse from '../assets/accessories/mouse.jpg'
import keyboard from '../assets/accessories/keyboard.jpg'
import headset from '../assets/accessories/Headset.jpg'
import controller from '../assets/accessories/controller.jpg'
import chair from '../assets/accessories/Chair.jpg'
import desk from '../assets/accessories/desk.jpg'
import rgb from '../assets/accessories/RGB.jpg'
import vr from '../assets/accessories/VR.jpg'
import microphone from '../assets/accessories/MP.jpg'
import webcam from '../assets/accessories/WEBCAM.jpg'
import streamingKit from '../assets/accessories/KIT.jpg'
import captureCard from '../assets/accessories/CARD.jpg'
import glasses from '../assets/accessories/GLASSES.jpg'
import coolingPad from '../assets/accessories/COOLINGPAD.jpg'
import mousePad from '../assets/accessories/pad.jpg'
import powerBank from '../assets/accessories/power bank.jpg'
import router from '../assets/accessories/router.jpg'
import speakers from '../assets/accessories/speaker.jpg'
import monitor from '../assets/accessories/Monitor.jpg'
import tablet from '../assets/accessories/Tablet.jpg'

// Consoles
import ps5 from '../assets/consoles/ps5.jpg'
import psPortal from '../assets/consoles/PORTAL.jpg'
import xboxX from '../assets/consoles/xbox x.jpg'
import xboxS from '../assets/consoles/xbox s.jpg'
import switchOLED from '../assets/consoles/olde.jpg'
import steamDeck from '../assets/consoles/steamdeck.jpg'
import rogAlly from '../assets/consoles/ally.jpg'
import legionGo from '../assets/consoles/legion go.jpg'
import msiClaw from '../assets/consoles/msiclaw.jpg'

// Gaming PCs
import desktop from '../assets/pcs/Desktops.jpg'
import laptop from '../assets/pcs/laptop.jpg'
import miniPc from '../assets/PCS/mini pc.jpg'
import customPc from '../assets/pcs/PC.jpg'

// Components
import gpu from '../assets/components/GPU.jpg'
import cpu from '../assets/components/CPU.jpg'
import motherboard from '../assets/components/Motherboard.jpg'
import ram from '../assets/components/Ram.jpg'
import ssd from '../assets/components/SSD.jpg'
import psu from '../assets/components/PSU.jpg'
import cooler from '../assets/components/COOLER.jpg'
import pcCase from '../assets/components/CASE.jpg'

const covers = {
  // Accessories
  'acc-mouse-viper': mouse,
  'acc-keyboard-ember': keyboard,
  'acc-headset-aero': headset,
  'acc-controller-flux': controller,
  'acc-chair-throne': chair,
  'acc-desk-driftwood': desk,
  'acc-rgb-glowbar': rgb,
  'acc-vr-halo': vr,
  'acc-mic-tone': microphone,
  'acc-webcam-clarity': webcam,
  'acc-streamkit-broadcast': streamingKit,
  'acc-capture-relay': captureCard,
  'acc-glasses-lumen': glasses,
  'acc-coolpad-chill': coolingPad,
  'acc-mousepad-vast': mousePad,
  'acc-powerbank-surge': powerBank,
  'acc-router-warp': router,
  'acc-speaker-bassline': speakers,
  'acc-monitor-swift': monitor,
  'acc-tablet-canvas': tablet,

  // Consoles
  'con-ps5': ps5,
  'con-ps-portal': psPortal,
  'con-xbox-x': xboxX,
  'con-xbox-s': xboxS,
  'con-switch-oled': switchOLED,
  'con-steam-deck': steamDeck,
  'con-rog-ally': rogAlly,
  'con-legion-go': legionGo,
  'con-msi-claw': msiClaw,

  // Gaming PCs
  'pc-desktop-forge': desktop,
  'pc-laptop-nomad': laptop,
  'pc-mini-cube': miniPc,
  'pc-custom-build': customPc,

  // Components
  'comp-gpu-titan': gpu,
  'comp-cpu-core9': cpu,
  'comp-mobo-vertex': motherboard,
  'comp-ram-flare': ram,
  'comp-ssd-quantum': ssd,
  'comp-psu-volt': psu,
  'comp-cooler-glacier': cooler,
  'comp-case-prism': pcCase,
}

const g = (i) => `hsl(${(i * 61 + 20) % 360} 65% 48%)`
const withDerived = (arr) =>
  arr.map((p, i) => ({
    ...p,
    slug: p.id,
    cover: covers[p.id], // <-- add this
    color: g(i),
    finalPrice: +(p.price * (1 - (p.discount || 0) / 100)).toFixed(2),
    rating: p.rating ?? 4.5,
    reviews: p.reviews ?? 1000 + i * 137,
  }))



export const accessories = withDerived([
  { id: 'acc-mouse-viper', title: 'Viper Wireless Gaming Mouse', category: 'Gaming Mouse', price: 79.99, discount: 20, desc: '30K DPI optical sensor with a featherweight 58g shell.' },
  { id: 'acc-keyboard-ember', title: 'Ember Mechanical Keyboard', category: 'Gaming Keyboard', price: 149.99, discount: 15, desc: 'Hot-swappable switches with per-key RGB.' },
  { id: 'acc-headset-aero', title: 'Aero 7.1 Wireless Headset', category: 'Gaming Headsets', price: 129.99, discount: 25, desc: 'Surround sound with a detachable noise-cancelling mic.' },
  { id: 'acc-controller-flux', title: 'Flux Pro Controller', category: 'Controllers', price: 69.99, discount: 10, desc: 'Swappable paddles and adjustable trigger stops.' },
  { id: 'acc-chair-throne', title: 'Throne X Gaming Chair', category: 'Gaming Chairs', price: 349.99, discount: 30, desc: 'Cold-cure foam and 4D armrests for marathon sessions.' },
  { id: 'acc-desk-driftwood', title: 'Driftwood Standing Desk', category: 'Gaming Desk', price: 289.99, discount: 5, desc: 'Motorized height adjustment with cable management channel.' },
  { id: 'acc-rgb-glowbar', title: 'Glowbar RGB Light Strip', category: 'RGB Lights', price: 34.99, discount: 40, desc: 'Sync lighting across your whole setup.' },
  { id: 'acc-vr-halo', title: 'Halo VR Headset', category: 'VR Headsets', price: 399.99, discount: 10, desc: 'Wireless VR with inside-out tracking.' },
  { id: 'acc-mic-tone', title: 'Tone Studio USB Microphone', category: 'Microphones', price: 99.99, discount: 15, desc: 'Cardioid condenser mic tuned for streaming.' },
  { id: 'acc-webcam-clarity', title: 'Clarity 4K Webcam', category: 'Webcams', price: 89.99, discount: 20, desc: '4K30 with auto-framing and low-light correction.' },
  { id: 'acc-streamkit-broadcast', title: 'Broadcast Streaming Kit', category: 'Streaming Kits', price: 249.99, discount: 10, desc: 'Mic, key light, and capture card in one bundle.' },
  { id: 'acc-capture-relay', title: 'Relay 4K Capture Card', category: 'Capture Cards', price: 179.99, discount: 5, desc: 'Zero-lag passthrough capture at up to 4K60.' },
  { id: 'acc-glasses-lumen', title: 'Lumen Blue-Light Glasses', category: 'Gaming Glasses', price: 29.99, discount: 0, desc: 'Anti-glare lenses for long sessions.' },
  { id: 'acc-coolpad-chill', title: 'Chill Base Cooling Pad', category: 'Cooling Pads', price: 24.99, discount: 20, desc: 'Dual 120mm fans with adjustable speed.' },
  { id: 'acc-mousepad-vast', title: 'Vast XXL Mouse Pad', category: 'Mouse Pads', price: 19.99, discount: 0, desc: 'Full-desk stitched-edge control surface.' },
  { id: 'acc-powerbank-surge', title: 'Surge 20K Power Bank', category: 'Power Banks', price: 44.99, discount: 15, desc: '65W fast charge for handhelds and phones.' },
  { id: 'acc-router-warp', title: 'Warp Gaming Router', category: 'Gaming Routers', price: 199.99, discount: 10, desc: 'Wi-Fi 7 with dedicated gaming QoS lanes.' },
  { id: 'acc-speaker-bassline', title: 'Bassline 2.1 Speakers', category: 'Gaming Speakers', price: 89.99, discount: 25, desc: 'Punchy desktop 2.1 setup with a down-firing sub.' },
  { id: 'acc-monitor-swift', title: 'Swift 27" 240Hz Monitor', category: 'Gaming Monitors', price: 349.99, discount: 15, desc: 'QHD IPS panel with 1ms response time.' },
  { id: 'acc-tablet-canvas', title: 'Canvas Gaming Tablet', category: 'Gaming Tablets', price: 449.99, discount: 5, desc: '144Hz AMOLED tablet built for cloud gaming.' },
])

export const consoles = withDerived([
  { id: 'con-ps5', title: 'PlayStation 5', category: 'PlayStation 5', price: 499.99, discount: 0, desc: 'Lightning-fast SSD and immersive haptic feedback.' },
  { id: 'con-ps-portal', title: 'PlayStation Portal', category: 'PlayStation Portal', price: 199.99, discount: 0, desc: 'Stream your PS5 library to a dedicated handheld.' },
  { id: 'con-xbox-x', title: 'Xbox Series X', category: 'Xbox Series X', price: 499.99, discount: 5, desc: 'The most powerful Xbox, built for 4K gaming.' },
  { id: 'con-xbox-s', title: 'Xbox Series S', category: 'Xbox Series S', price: 299.99, discount: 5, desc: 'All-digital next-gen performance in a compact frame.' },
  { id: 'con-switch-oled', title: 'Nintendo Switch OLED', category: 'Nintendo Switch OLED', price: 349.99, discount: 0, desc: 'Vivid 7" OLED screen, play docked or handheld.' },
  { id: 'con-steam-deck', title: 'Steam Deck', category: 'Steam Deck', price: 399.99, discount: 10, desc: 'Your Steam library, in your hands, anywhere.' },
  { id: 'con-rog-ally', title: 'ASUS ROG Ally', category: 'ASUS ROG Ally', price: 599.99, discount: 10, desc: 'A full Windows gaming handheld with a 120Hz display.' },
  { id: 'con-legion-go', title: 'Lenovo Legion Go', category: 'Lenovo Legion Go', price: 649.99, discount: 5, desc: 'Detachable controllers and an 8.8" QHD+ display.' },
  { id: 'con-msi-claw', title: 'MSI Claw', category: 'MSI Claw', price: 599.99, discount: 15, desc: 'Intel Core Ultra handheld with a 120Hz IPS panel.' },
])

export const gamingPCs = withDerived([
  { id: 'pc-desktop-forge', title: 'Forge RTX Gaming Desktop', category: 'Gaming Desktop', price: 1899.99, discount: 10, desc: 'RTX-class desktop tower built for 4K gaming.' },
  { id: 'pc-laptop-nomad', title: 'Nomad 16" Gaming Laptop', category: 'Gaming Laptop', price: 1699.99, discount: 15, desc: 'High-refresh 16" QHD panel in a slim aluminum chassis.' },
  { id: 'pc-mini-cube', title: 'Cube Mini Gaming PC', category: 'Mini Gaming PC', price: 999.99, discount: 5, desc: 'Living-room-sized, full desktop-class performance.' },
  { id: 'pc-custom-build', title: 'Custom Build Configurator', category: 'Custom Builds', price: 1499.99, discount: 0, desc: 'Pick every part — we build it, test it, ship it.' },
])

export const components = withDerived([
  { id: 'comp-gpu-titan', title: 'Titan RTX Graphics Card', category: 'Graphics Cards', price: 999.99, discount: 5, desc: 'Ray-traced 4K performance with DLSS support.' },
  { id: 'comp-cpu-core9', title: 'Core9 Processor', category: 'Processors', price: 449.99, discount: 10, desc: 'High core-count CPU tuned for gaming and streaming.' },
  { id: 'comp-mobo-vertex', title: 'Vertex Z Motherboard', category: 'Motherboards', price: 279.99, discount: 5, desc: 'PCIe 5.0, Wi-Fi 7, and robust VRM cooling.' },
  { id: 'comp-ram-flare', title: 'Flare DDR5 RAM 32GB', category: 'RAM', price: 129.99, discount: 15, desc: 'Low-latency DDR5 kit with RGB heat spreaders.' },
  { id: 'comp-ssd-quantum', title: 'Quantum NVMe SSD 2TB', category: 'SSD', price: 149.99, discount: 20, desc: 'Gen5 speeds for near-instant load times.' },
  { id: 'comp-psu-volt', title: 'Volt 850W Power Supply', category: 'Power Supplies', price: 119.99, discount: 10, desc: '80+ Gold certified, fully modular.' },
  { id: 'comp-cooler-glacier', title: 'Glacier 360 AIO Cooler', category: 'Cooling Systems', price: 159.99, discount: 15, desc: '360mm radiator with near-silent pump.' },
  { id: 'comp-case-prism', title: 'Prism Mesh PC Case', category: 'Cases', price: 99.99, discount: 10, desc: 'High-airflow mesh front with tempered glass side panel.' },
])

export const brands = [
  'Razer', 'ASUS ROG', 'MSI', 'Corsair', 'SteelSeries', 'Logitech G', 'HyperX',
  'Alienware', 'NVIDIA', 'AMD', 'Intel', 'Sony', 'Microsoft', 'Nintendo',
  'Samsung', 'LG', 'AOC', 'BenQ', 'Secretlab',
].map((name, i) => ({ id: name.toLowerCase().replace(/\s+/g, '-'), name, color: g(i + 5) }))

export const categories = [
  'Action', 'Adventure', 'RPG', 'Open World', 'FPS', 'TPS', 'Sports', 'Racing',
  'Strategy', 'Simulation', 'Horror', 'Fighting', 'Battle Royale', 'Sandbox',
  'Survival', 'Indie', 'MMORPG', 'Puzzle', 'Family', 'VR',
]

export const allCatalogs = {
  accessories, consoles, 'gaming-pcs': gamingPCs, components,
}


export const getProductBySlug = (type, slug) => {
  const list = allCatalogs[type] || []
  return list.find((p) => p.slug === slug)
}
