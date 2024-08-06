// config.js
const config = {
  portfolioTitle: "Eswancoders Portfolio",
  aboutMe: {
    heading: "About Me",
    description: `Hello! I am a Roblox scripter. I have been programming for 6 years. I have been learning LUA for the past 2 years. I love seeing how things work and am always open to crazy ideas. Below is some of my past work, it is old and I am updating it whenever I have time. Thank you for thinking about choosing me!`
  },
  pastWork: {
    heading: "Past Work",
    videos: [
      { src: "v1.mp4", type: "video/mp4" },
      { src: "v2.mp4", type: "video/mp4" },
      { src: "v3.mp4", type: "video/mp4" },
      { src: "v4.mp4", type: "video/mp4" },
      { src: "v5.mp4", type: "video/mp4" }
    ]
  },
  pricing: {
    heading: "Pricing",
    details: [
      { description: "Small commissions: Simple mechanics/game systems like tools, round system, datastores, etc.", price: "200-900" },
      { description: "Medium commissions: More complex version of small commissions. Larger games, mechanics, etc.", price: "900-1800" },
      { description: "Large commissions: Whole games, complex mechanics, anything everyone knows it's hard to do.", price: "1800-6000" }
    ]
  },
  contacts: [
    { href: "mailto:business@eswancoder.online",imgSrc: "data:image/png;base64,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", alt: "Email" },
    { href: "https://discord.com/channels/@me", imgSrc: "https://i.imgur.com/JOyLkB0.png", alt: "discord: eswancoder" }
  ]
};
