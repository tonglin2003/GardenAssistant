export interface UserPlant{
  plantId: string;
  name: string;
  careNote:string;
  imgUrl: string;
  // @ts-ignore
  careRequirement: {
    water: number,
    sunlight: number,
    health: number
  };

}
