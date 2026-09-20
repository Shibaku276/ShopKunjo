import React from 'react';
import { FaYoutube, FaGithub, FaLinkedin, FaFacebook, FaSlack } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@shopkunjo",
    icon: <FaYoutube className="w-5 h-5" />
  },
  {
    title: "Github",
    href: "https://www.github.com/shopkunjo",
    icon: <FaGithub className="w-5 h-5" />
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/company/shopkunjo",
    icon: <FaLinkedin className="w-5 h-5" />
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/shopkunjo",
    icon: <FaFacebook className="w-5 h-5" />
  },
  {
    title: "Slack",
    href: "https://join.slack.com/t/shopkunjo/shared_invite/zt-1234567890-abcd1234efgh5678ijkl9012",
    icon: <FaSlack className="w-5 h-5" />
  },
];


const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}> 
            <TooltipTrigger> 
              <Link key={item?.title} href={item?.href} target="_blank" rel="noopener noreferrer" className ={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect", iconClassName)}> 
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn("bg-white text-darkColor font-semibold border border-shop_light_green", tooltipClassName)}>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia