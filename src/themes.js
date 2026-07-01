const ultraviolet = {
  label: 'Ultraviolet',
  dot: '#7c6dff',
  '--bg': '#070816',
  '--bg2': '#0d1024',
  '--bg3': '#151936',
  '--surface': 'rgba(18, 22, 48, 0.78)',
  '--border': '#24294f',
  '--text': '#f4f5ff',
  '--muted': '#a7add2',
  '--accent': '#7c6dff',
  '--accent2': '#27d7c4',
  '--warm': '#ffbd7a',
  '--nav-bg': 'rgba(7, 8, 22, 0.82)',
}

const ruby = {
  label: 'Ruby',
  dot: '#e05252',
  '--bg': '#120808',
  '--bg2': '#1c0f0f',
  '--bg3': '#261414',
  '--surface': 'rgba(28, 15, 15, 0.78)',
  '--border': '#3d1e1e',
  '--text': '#f0e0e0',
  '--muted': '#b78f8f',
  '--accent': '#e05252',
  '--accent2': '#f0a040',
  '--warm': '#ffd18f',
  '--nav-bg': 'rgba(18, 8, 8, 0.88)',
}

const slate = {
  label: 'Slate',
  dot: '#58a6ff',
  '--bg': '#0d1117',
  '--bg2': '#161b22',
  '--bg3': '#21262d',
  '--surface': 'rgba(22, 27, 34, 0.78)',
  '--border': '#30363d',
  '--text': '#e6edf3',
  '--muted': '#9ca8b5',
  '--accent': '#58a6ff',
  '--accent2': '#3fb950',
  '--warm': '#f2cc60',
  '--nav-bg': 'rgba(13, 17, 23, 0.88)',
}

export const THEMES = {
  ultraviolet,
  ruby,
  slate,
  midnight: slate,
  terminal: ultraviolet,
  aurora: ultraviolet,
}

export const DEFAULT_THEME = 'ultraviolet'
