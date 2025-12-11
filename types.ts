import * as d3 from 'd3';

export enum AxisType {
  DIGITAL = 'Digitalisation & Smart Commune',
  IMPACT = 'Projets d\'Impact (Social/Env)',
  ECONOMY = 'Initiatives Économiques'
}

export enum Region {
  SUD_EST = 'Sud-Est (Tataouine, Remada, Kébili)',
  LITTORAL = 'Littoral (Gabès, Médenine, Djerba, Zarzis)',
  NORD_OUEST = 'Nord-Ouest (Jendouba, Kef)',
  NATIONAL = 'National / Transversal'
}

export enum Commune {
  TATAOUINE = 'Tataouine',
  REMADA = 'Remada',
  KEBILI = 'Kébili',
  GABES = 'Gabès',
  GHANNOUCHE = 'Ghannouche',
  MEDENINE = 'Médenine',
  DJERBA = 'Djerba',
  ZARZIS = 'Zarzis',
  BEN_GUERDANE = 'Ben Guerdane',
  JENDOUBA = 'Jendouba',
  KEF = 'Kef',
  ZAAFRANE = 'Zaafrane',
  SOUK_ESSEBT = 'Souk Essebt',
  TOUTES = 'Toutes les communes'
}

export interface Actor {
  id: string;
  name: string;
  description: string;
  sector: string;
  regions: Region[];
  communes: Commune[];
  axes: AxisType[];
  contribution: string;
  contact?: string;
  projectExample?: string;
  type: 'Private' | 'Public' | 'NGO' | 'International';
}

export interface AxisNode {
  id: AxisType;
  group: number;
}

export interface NetworkNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: 'actor' | 'axis';
  group: AxisType | 'center';
  radius: number;
  data?: Actor;
}

export interface NetworkLink extends d3.SimulationLinkDatum<NetworkNode> {
  source: string | NetworkNode;
  target: string | NetworkNode;
  value: number;
}