import { Offer, Cities, Amenity } from '../types/offer.type.js';
import { User } from '../types/user.type.js';


export function createOffer(offerData: string): Offer {
  const [
    tytle,
    description,
    price,
    createDate,
    city,
    previewImage,
    images,
    premium,
    favorite,
    rating,
    bedrooms,
    guests,
    amenities,
    commentsCount,
    coordinates,
  ] = offerData.replace('\n', '').split('\t');

  const [latatude, longitude] = coordinates.split(',');

  const autorTest: User = {
    name: 'Test',
    email: 'example@example.com',
    avatarPath: 'avatar/path',
    typeUser: 'ordinary'
  };

  return {
    tytle: tytle,
    description,
    price: Number(price),
    createDate: new Date(createDate),
    city: city as Cities,
    previewImage,
    images: images.split('|'),
    premium: !!premium,
    favorite: !!favorite,
    rating: Number(rating),
    bedrooms: Number(bedrooms),
    guests: Number(guests),
    amenities: amenities.split('|') as Amenity[],
    author: autorTest,
    commentsCount: commentsCount,
    coordinates: {
      latatude: Number(latatude),
      longitude: Number(longitude),
    },
  };
}
