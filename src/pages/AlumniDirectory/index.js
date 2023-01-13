import React from "react";

import { Img, Input, Text, Grid, Button } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const AlumniDirectoryPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_100 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col justify-start w-[100%]">
          <header className="w-[100%]">
            <div className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[4px] md:p-[5px] p-[8px] w-[100%]">
              <div className="flex flex-row md:flex-wrap sm:flex-wrap max-w-[1384px] md:ml-[16px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%] common-row-list">
                <ul className="flex flex-row items-center">
                  <li className="w-[7%] sm:w-[100%] sm:my-[10px] rounded-radius50">
                    <Img
                      src="images/img_logo.png"
                      className="sm:h-[45px] md:h-[58px] h-[83px] rounded-radius50"
                      alt="logo"
                    />
                  </li>
                  <li className="w-[43%] mt-[14px] mb-[15px] ml-[208px] sm:w-[100%] sm:my-[10px] sm:mx-[0] md:ml-[143px] md:mb-[10px] md:mt-[9px]">
                    <Input
                      value={inputvalue}
                      onChange={(e) => setInputvalue(e?.target?.value)}
                      className="font-normal not-italic p-[0] sm:text-[25px] md:text-[27px] text-[29px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
                      wrapClassName="flex sm:mx-[0] sm:w-[100%] w-[43%]"
                      name="GroupSixteen"
                      placeholder="Search an Alumni"
                      prefix={
                        <Img
                          src="images/img_search.svg"
                          className="cursor-pointer ml-[9px] mr-[27px] sm:mr-[14px] sm:ml-[4px] md:mr-[18px] md:ml-[6px] my-[auto]"
                          alt="search"
                        />
                      }
                      suffix={
                        inputvalue?.length > 0 ? (
                          <CloseSVG
                            color="#adb5c0"
                            className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                            onClick={() => setInputvalue("")}
                          />
                        ) : (
                          ""
                        )
                      }
                    ></Input>
                  </li>
                  <li className="w-[4%] mt-[16px] mb-[13px] ml-[236px] sm:ml-[125px] sm:w-[100%] sm:my-[10px] md:ml-[162px] md:mb-[8px] md:mt-[11px] rounded-radius50">
                    <Img
                      src="images/img_logo_54X54.png"
                      className="sm:h-[29px] md:h-[38px] h-[54px] rounded-radius50"
                      alt="logo One"
                    />
                  </li>
                  <li className="w-[auto] ml-[13px] sm:ml-[6px] sm:w-[100%] sm:my-[10px] md:ml-[8px] md:my-[17px] my-[25px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic sm:text-[23px] md:text-[25px] text-[27px] text-black_900"
                      rel="noreferrer"
                    >
                      Nishith Savla{" "}
                    </a>
                  </li>
                  <li className="w-[2%] mt-[36px] mb-[37px] ml-[14px] sm:ml-[7px] sm:w-[100%] sm:my-[10px] md:ml-[9px] md:mb-[25px] md:mt-[24px] max-w-[100%]">
                    <Img
                      src="images/img_arrowdown.svg"
                      className="max-w-[100%]"
                      alt="arrowdown"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1368px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <aside className="md:hidden sm:hidden w-[21%]">
              <div className="">
                <div className="bg-blue_300 flex flex-col items-center justify-center md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                  <div className="flex flex-col justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Img
                        src="images/img_settings.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="settings"
                      />
                      <Text
                        className="flex-grow font-medium ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] text-white_A700"
                        variant="body13"
                      >
                        Feed
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[58%]">
                      <Img
                        src="images/img_arrowdown_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowdown One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="bg-indigo_A200 flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[80%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Alumni Directory
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[3px] sm:px-[0] sm:w-[100%] w-[68%]">
                      <Img
                        src="images/img_trash.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] mb-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="trash"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Photo Gallery
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_user_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Professors
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Img
                        src="images/img_menu.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="menu"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Events
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 shadow-bs w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[65%]">
                      <Img
                        src="images/img_menu.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="menu One"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Scholarships
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[55%]">
                      <Img
                        src="images/img_user.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="user Two"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Donations
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start sm:mb-[216px] md:mb-[279px] mb-[406px] p-[10px] md:p-[6px] sm:px-[0] sm:py-[5px] rounded-radius7 w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] my-[4px] sm:px-[0] sm:w-[100%] w-[35%]">
                      <Img
                        src="images/img_libuilding.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="libuilding"
                      />
                      <Text
                        className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] mt-[3px] not-italic text-white_A700"
                        variant="body13"
                      >
                        Jobs
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="flex flex-col justify-start md:ml-[33px] ml-[48px] sm:mt-[29px] md:mt-[37px] mt-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
              <Text
                className="font-bold ml-[1px] text-black_900 w-[auto]"
                as="h6"
                variant="h6"
              >
                Directory
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                  <Img
                    src="images/img_arrowdown_gray_500.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowdown Two"
                  />
                  <Text
                    className="flex-grow not-italic text-gray_501"
                    variant="body8"
                  >
                    Branch
                  </Text>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly md:ml-[27px] ml-[40px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                  <Img
                    src="images/img_arrowdown_gray_500.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="arrowdown Three"
                  />
                  <Text
                    className="flex-grow not-italic text-gray_501"
                    variant="body8"
                  >
                    2021-22
                  </Text>
                </div>
              </div>
              <Grid className="sm:gap-[27px] md:gap-[35px] gap-[51px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Junior Environmentalist
                    </Text>
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto One"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Full Time Simp
                    </Text>
                    <Text
                      className="sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[100%]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto Two"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Junior Environmentalist
                    </Text>
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto Three"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Junior Environmentalist
                    </Text>
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto Four"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Junior Environmentalist
                    </Text>
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto Five"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Full Time Simp
                    </Text>
                    <Text
                      className="sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[100%]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto Six"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Junior Environmentalist
                    </Text>
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
                <div className="bg-white_A700 hover:cursor-pointer hover:flex flex hover:flex-col flex-col items-center justify-end md:p-[10px] p-[15px] sm:p-[7px] rounded-radius25 hover:shadow-bs hover:w-[100%] w-[100%]">
                  <Img
                    src="images/img_profilephoto.png"
                    className="sm:h-[35px] md:h-[45px] h-[65px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[34px] md:w-[44px] w-[65px]"
                    alt="ProfilePhoto Seven"
                  />
                  <div className="flex flex-col items-center justify-start mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                    <Text
                      className="font-bold text-black_900 w-[auto]"
                      variant="body12"
                    >
                      Greta Thunberg
                    </Text>
                    <Text
                      className="mt-[4px] not-italic text-black_900 w-[auto]"
                      variant="body17"
                    >
                      Junior Environmentalist
                    </Text>
                    <Text
                      className="mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-gray_700 w-[auto]"
                      variant="body18"
                    >
                      Earth Movers
                    </Text>
                    <Text
                      className="mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-black_900 w-[auto]"
                      variant="body20"
                    >
                      Mumbai
                    </Text>
                    <Button
                      className="cursor-pointer font-normal min-w-[98%] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-[18px] text-center text-white_A700 w-[max-content]"
                      size="md"
                    >
                      View Profile
                    </Button>
                  </div>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumniDirectoryPage;
