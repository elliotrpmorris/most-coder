import React, { FunctionComponent } from 'react';

type CallToActionProps = {
  text: string,
  link: string,
}

export const CallToAction: FunctionComponent<CallToActionProps> = ({
  text,
  link,
}) => (
  <a
    href={`${link}`}
    className="m-4 bg-hippiegreen p-4 text-equator text-2xl lg:text-3xl hover:bg-sundance
                hover:text-ebonyclay hover:shadow rounded-xl inline-flex items-center
                transform hover:scale-105 cursor-pointer mt-4 transform -rotate-1"
  >
    {text}
  </a>
);
