import {FaRegCalendarAlt, FaRegHospital} from 'react-icons/fa';
import {FiMap, FiUsers} from 'react-icons/fi';
import {HiOutlineAcademicCap, HiOutlineChartSquareBar} from 'react-icons/hi';
import {
  RiCustomerService2Line,
  RiDashboardLine,

} from 'react-icons/ri';
import {
  BsCart4,
  BsCurrencyBitcoin,
} from 'react-icons/bs';
import {
  MdOutlineAnalytics,
} from 'react-icons/md';
import {ReactNode} from 'react';
import {RoutePermittedRole} from '../shared/constants/AppConst';

export interface RouterConfigData {
  id: string;
  title: string;
  messageId: string;
  icon?: string | ReactNode;
  type: 'item' | 'group' | 'collapse' | 'divider';
  children?: RouterConfigData[];
  permittedRole?: RoutePermittedRole;
  color?: string;
  url?: string;
  exact?: boolean;
  count?: number;
  as?: string;
}

const routesConfig: RouterConfigData[] = [
  {
    id: 'app',
    title: 'Application',
    messageId: 'sidebar.application',
    type: 'group',
    children: [
      {
        id: 'crypto',
        title: 'Crypto',
        messageId: 'sidebar.app.dashboard.crypto',
        type: 'item',
        icon: <BsCurrencyBitcoin />,
        url: '/dashboards/crypto',
      },
      {
        id: 'crm',
        title: 'CRM',
        messageId: 'sidebar.app.dashboard.crm',
        type: 'item',
        icon: <RiCustomerService2Line />,
        url: '/dashboards/crm',
      },
      {
        id: 'analytics',
        title: 'Analytics',
        messageId: 'sidebar.app.dashboard.analytics',
        type: 'item',
        icon: <MdOutlineAnalytics />,
        url: '/dashboards/analytics',
      },
      {
        id: 'healthCare',
        title: 'Health Care',
        messageId: 'sidebar.healthCare',
        type: 'item',
        icon: <FaRegHospital />,
        url: '/dashboards/health-care',
      },
      {
        id: 'e-commerce',
        title: 'E-Commerce',
        messageId: 'sidebar.app.dashboard.eCommerce',
        type: 'item',
        icon: <BsCart4 />,
        url: '/dashboards/e-commerce',
      },
      {
        id: 'academy',
        title: 'Academy',
        messageId: 'sidebar.app.dashboard.academy',
        type: 'item',
        icon: <HiOutlineAcademicCap />,
        url: '/dashboards/academy',
      },
      {
        id: 'metrics',
        title: 'Metrics',
        messageId: 'sidebar.app.metrics',
        type: 'item',
        icon: <HiOutlineChartSquareBar />,
        url: '/dashboards/metrics',
      },
      {
        id: 'widgets',
        title: 'Widgets',
        messageId: 'sidebar.app.widgets',
        type: 'item',
        icon: <RiDashboardLine />,
        url: '/dashboards/widgets',
      },
    ],
  },
  
];
export default routesConfig;
