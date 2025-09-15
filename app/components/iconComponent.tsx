import {iconMap} from '../constants';

export interface IconComponentProps {
  name: keyof typeof iconMap;
  className?: string;
}

export default function IconComponent({ name, className = "w-6 h-6" }: IconComponentProps) {
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}