import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateProfileDto } from './profile.dto';
import { ProfileService } from './profile.service';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  @Get()
  async index() {
    return await this.service.findAll();
  }

  @Get(':wallet')
  async getProfile(@Param('wallet') wallet: string) {
    return await this.service.getProfile(wallet);
  }
  @Put(':wallet')
  @ApiOperation({ description: 'https://prnt.sc/flV4MpfAuRW3' })
  async updateProfile(
    @Param('wallet') wallet: string,
    @Body() updateProfile: UpdateProfileDto,
  ) {
    return await this.service.updateProfile(wallet, updateProfile);
  }
}
