import { CloudinaryContext } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';

const cld = new Cloudinary({
  cloud: {
    cloudName: 'CLOUDINARY_NAME'
  }
});

<CloudinaryContext cloudName="CLOUDINARY_NAME">
{/* <Image publicId="sample" /> */}
</CloudinaryContext>
