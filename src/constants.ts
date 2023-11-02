import { v4 as uuidv4 } from 'uuid';

import gitlabIcon from './assets/images/gitlab.png'
import nginxIcon from './assets/images/nginx.png'
import nodeIcon from './assets/images/nodejs.png'
import reactIcon from './assets/images/react.png'
import reduxIcon from './assets/images/redux.png'
import typescriptIcon from './assets/images/typescript.png'
import webpackIcon from './assets/images/webpack.png'
import webstormIcon from './assets/images/webstorm.png'

export const MAX_ATTEMPTS = 40
export const TIMEOUT = 1500

const icons = [gitlabIcon, nginxIcon, nodeIcon, reactIcon, reduxIcon, typescriptIcon, webpackIcon, webstormIcon]

const preloadImages = (images: string[]) => {
    images.forEach(src => {
        new Image().src = src;
    });

    return images;
}

const preloadedImages = preloadImages([...icons, ...icons])

export const data: TCard[] = preloadedImages.map((icon) =>({
    id: uuidv4(),
    src: icon,
    isOpened: false,
    isSolved: false,
}))
