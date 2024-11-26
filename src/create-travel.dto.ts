
import { IsString, IsInt, Min, Max, IsUrl, Length } from 'class-validator';

export class CreateTravelDto {
  @IsString()
  @Length(1)
  destination: string;

  @IsString()
  @Length(30)
  description: string;

  @IsUrl()
  imgUrl: string;

  @IsInt()
  @Min(1)
  price: number;

  @IsInt()
  @Min(0)
  @Max(50)
  discount: number = 0;
}

