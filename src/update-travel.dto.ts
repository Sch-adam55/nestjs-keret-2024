
import { IsString, IsInt, Min, Max, IsUrl, Length, IsOptional } from 'class-validator';


export class UpdateTravelDto {
  @IsString()
  @IsOptional()
  @Length(1)
  destination?: string;

  @IsString()
  @IsOptional()
  @Length(30)
  description?: string;

  @IsUrl()
  @IsOptional()
  imgUrl?: string;

  @IsInt()
  @IsOptional()
  @Min(1)
  price?: number;

  @IsInt()
  @IsOptional()
  @Min(0)
  @Max(50)
  discount?: number;
}

