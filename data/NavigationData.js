import {
  CalculatorIcon,
  ChartBarIcon,
  CogIcon,
  InboxInIcon,
  NewspaperIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

export const navigationData = [
  {
    id: 1,
    icon: <ViewGridIcon className='w-8' />,
    title: "Dashboard",
  },
  {
    id: 2,
    icon: <NewspaperIcon className='w-8' />,
    title: "Appointements",
  },
  {
    id: 3,
    icon: <CalculatorIcon className='w-8' />,
    title: "Activity",
  },
  {
    id: 4,
    icon: <InboxInIcon className='w-8' />,
    title: "Messages",
  },
  {
    id: 5,
    icon: <ChartBarIcon className='w-8' />,
    title: "Statistic",
  },
  {
    id: 6,
    icon: <CogIcon className='w-8' />,
    title: "Settings",
  },
];
