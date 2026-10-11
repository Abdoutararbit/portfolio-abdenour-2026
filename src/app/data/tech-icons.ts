/** Associe le nom d'une technologie à son logo (symbole `t-*`) ou à une icône générique (symbole `i-*`). */
export interface TechIcon {
  href: string;
  kind: 'brand' | 'generic';
  color?: string;
}

const brand = (slug: string): TechIcon => ({ href: `#t-${slug}`, kind: 'brand' });
const generic = (id: string, color: string): TechIcon => ({ href: `#i-${id}`, kind: 'generic', color });

// L'ordre compte : la première règle qui correspond l'emporte (ex. « gitlab » avant « git »).
const RULES: Array<[string, TechIcon]> = [
  ['angular', brand('angular')], ['react', brand('react')], ['node.js', brand('nodedotjs')], ['express', brand('express')],
  ['typescript', brand('typescript')], ['javascript', brand('javascript')], ['html', brand('html5')], ['scss', brand('sass')],
  ['css', brand('css')], ['bootstrap', brand('bootstrap')], ['tailwind', brand('tailwindcss')], ['flutter', brand('flutter')],
  ['dart', brand('dart')], ['python', brand('python')], ['php', brand('php')], ['mysql', brand('mysql')], ['mongodb', brand('mongodb')],
  ['sqlcipher', generic('lock', '#3B5B7A')], ['sqlite', brand('sqlite')], ['oracle', generic('db', '#C74634')],
  ['socket.io', brand('socketdotio')], ['gitlab', brand('gitlab')], ['git', brand('git')], ['docker', brand('docker')], ['nginx', brand('nginx')],
  ['jwt', brand('jsonwebtokens')], ['ldap', generic('shield', '#2F6F9F')], ['rôles', generic('shield', '#2F6F9F')],
  ['chart.js', brand('chartdotjs')], ['echarts', brand('apacheecharts')], ['fl_chart', generic('chart', '#02569B')],
  ['robot framework', brand('robotframework')], ['selenium', brand('selenium')], ['tests', generic('flask', '#2E7D5B')],
  ['leaflet', brand('leaflet')], ['arcgis', brand('arcgis')], ['gemini', brand('googlegemini')], ['openproject', brand('openproject')],
  ['rxjs', generic('pulse', '#B7178C')], ['tesseract', generic('scan', '#3B5B7A')], ['alfresco', generic('archive', '#4A8F3C')],
  ['nodemailer', generic('mail', '#2F6F9F')], ['riverpod', generic('layers', '#02569B')], ['clean architecture', generic('layers', '#3B5B7A')],
  ['satim', generic('card', '#2F6F9F')], ['agile', generic('tasks', '#2E7D5B')], ['icescrum', generic('tasks', '#2E7D5B')],
];

export function resolveTech(name: string): TechIcon | null {
  const n = name.toLowerCase();
  return RULES.find(([key]) => n.includes(key))?.[1] ?? null;
}
