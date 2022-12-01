const nodeMailer = require("nodemailer");
const CONFIG = require("../config/config");

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG.email.EMAILUSERNAME,
    pass: CONFIG.email.EMAILPASSWORD,
  },
  // host: CONFIG.email.SMTP,
  // port: CONFIG.email.SMTP_PORT,
  // secure: false,
  // auth: {
  //   user: CONFIG.email.EMAILUSERNAME,
  //   pass: CONFIG.email.EMAILPASSWORD,
  // },
});

module.exports = {
  sendForVeriy: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.Welcome,
      html: `<html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          @media (max-width: 720px) {
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #f9f9f9;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 10px;
                                    line-height: 10px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-2"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 15px;
                                    line-height: 15px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          class="big"
                                          src="images/Up_pink.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 700px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="700"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-5"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffd3e0;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                               
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #191919;
                                            line-height: 1.5;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >Hi ${body.firstName},
                                              </span></strong
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >Welcome to FrontendArmy!</span
                                              ></strong
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 65px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #191919;
                                            line-height: 1.2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 16.8px;
                                            "
                                          >
                                            <span style="font-size: 22px"
                                              >Thank you for subscribing!</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-16"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffd3e0;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="50%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 25px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 50px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #191919;
                                            line-height: 1.5;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 45px;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><strong
                                                ><span style=""
                                                  >Get Our
                                                </span></strong
                                              ></span
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 45px;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><strong
                                                ><span style=""
                                                  >Mobile App</span
                                                ></strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 15px;
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          src="images/App_Store_Badge_US_Black.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 175px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="175"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                        padding-bottom: 35px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          src="images/Google_Play_Badge_US.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 175px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="175"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="50%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                        padding-top: 20px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          src="images/app_image_2.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 298px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="298"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-17"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_block block-2"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 50px;
                                        text-align: center;
                                      "
                                    >
                                      <div align="center" class="alignment">
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="social-table"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            display: inline-block;
                                          "
                                          width="230px"
                                        >
                                          <tr>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://www.facebook.com/"
                                                target="_blank"
                                                ><img
                                                  alt="Facebook"
                                                  height="32"
                                                  src="images/facebook2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="Facebook"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://twitter.com/"
                                                target="_blank"
                                                ><img
                                                  alt="Twitter"
                                                  height="32"
                                                  src="images/twitter2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="Twitter"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://instagram.com/"
                                                target="_blank"
                                                ><img
                                                  alt="Instagram"
                                                  height="32"
                                                  src="images/instagram2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="Instagram"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://www.linkedin.com/"
                                                target="_blank"
                                                ><img
                                                  alt="LinkedIn"
                                                  height="32"
                                                  src="images/linkedin2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="LinkedIn"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a href="" target="_blank"
                                                ><img
                                                  alt="YouTube"
                                                  height="32"
                                                  src="images/youtube2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="YouTube"
                                                  width="32"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 25px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 28px;
                                            "
                                          >
                                            If you have any questions, feel free
                                            message us at support@mailus.com. All
                                            right reserved. Update
                                            <a
                                              href="#"
                                              rel="noopener"
                                              style="
                                                text-decoration: none;
                                                color: #555555;
                                              "
                                              target="_blank"
                                              >email preferences</a
                                            >
                                            or
                                            <a
                                              href="#"
                                              rel="noopener"
                                              style="
                                                text-decoration: none;
                                                color: #555555;
                                              "
                                              target="_blank"
                                              >unsubscribe</a
                                            >.
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 28px;
                                            "
                                          >
                                            5781 Spring St Salinas, Idaho 88606
                                            United States
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-18"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="10"
                                  cellspacing="0"
                                  class="text_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #ffffff;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 12px;
                                              text-align: center;
                                              mso-line-height-alt: 14.399999999999999px;
                                            "
                                          >
                                            <span style="color: #555555"
                                              >Terms of use
                                              <strong>|</strong> Privacy
                                              Policy</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-19"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          class="big"
                                          src="images/white_down.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 700px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="700"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-20"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 25px;
                                    line-height: 25px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-21"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        vertical-align: middle;
                                        color: #9d9d9d;
                                        font-family: inherit;
                                        font-size: 15px;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            class="alignment"
                                            style="
                                              vertical-align: middle;
                                              text-align: center;
                                            "
                                          >
                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                            <!--[if !vml]><!-->
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>   
    
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendForEmailUpdate: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.email_Changed,
      text: `   
      <html
      lang="en"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      xmlns:v="urn:schemas-microsoft-com:vml"
    >
      <head>
        <title></title>
        <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <!--[if mso
          ]><xml
            ><o:OfficeDocumentSettings
              ><o:PixelsPerInch>96</o:PixelsPerInch
              ><o:AllowPNG /></o:OfficeDocumentSettings></xml
        ><![endif]-->
        <style>
          * {
            box-sizing: border-box;
          }
    
          body {
            margin: 0;
            padding: 0;
          }
    
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: inherit !important;
          }
    
          #MessageViewBody a {
            color: inherit;
            text-decoration: none;
          }
    
          p {
            line-height: inherit;
          }
    
          .desktop_hide,
          .desktop_hide table {
            mso-hide: all;
            display: none;
            max-height: 0px;
            overflow: hidden;
          }
    
          @media (max-width: 720px) {
            .desktop_hide table.icons-inner,
            .social_block.desktop_hide .social-table {
              display: inline-block !important;
            }
    
            .icons-inner {
              text-align: center;
            }
    
            .icons-inner td {
              margin: 0 auto;
            }
    
            .image_block img.big,
            .row-content {
              width: 100% !important;
            }
    
            .mobile_hide {
              display: none;
            }
    
            .stack .column {
              width: 100%;
              display: block;
            }
    
            .mobile_hide {
              min-height: 0;
              max-height: 0;
              max-width: 0;
              overflow: hidden;
              font-size: 0px;
            }
    
            .desktop_hide,
            .desktop_hide table {
              display: table !important;
              max-height: none !important;
            }
          }
        </style>
      </head>
      <body
        style="
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        "
      >
        <table
          border="0"
          cellpadding="0"
          cellspacing="0"
          class="nl-container"
          role="presentation"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            background-color: #f9f9f9;
          "
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-1"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 10px;
                                    line-height: 10px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-2"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              ></td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-3"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 15px;
                                    line-height: 15px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-4"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          class="big"
                                          src="images/Up_pink.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 700px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="700"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-5"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffd3e0;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                               
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #191919;
                                            line-height: 1.5;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >Hi ${body.firstName},
                                              </span></strong
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 24px;
                                            "
                                          >
                                            <strong
                                              ><span style="font-size: 38px"
                                                >Welcome to FrontendArmy!</span
                                              ></strong
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 65px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 10px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #191919;
                                            line-height: 1.2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 16.8px;
                                            "
                                          >
                                            <span style="font-size: 22px"
                                              >Thank you for subscribing!</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
    
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-16"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffd3e0;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="50%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 25px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 50px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 18px;
                                            color: #191919;
                                            line-height: 1.5;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 45px;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><strong
                                                ><span style=""
                                                  >Get Our
                                                </span></strong
                                              ></span
                                            >
                                          </p>
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-line-height-alt: 45px;
                                            "
                                          >
                                            <span style="font-size: 30px"
                                              ><strong
                                                ><span style=""
                                                  >Mobile App</span
                                                ></strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 15px;
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          src="images/App_Store_Badge_US_Black.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 175px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="175"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                        padding-bottom: 35px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          src="images/Google_Play_Badge_US.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 175px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="175"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td
                                class="column column-2"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="50%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-3"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                        padding-top: 20px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          src="images/app_image_2.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 298px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="298"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-17"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_block block-2"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 10px;
                                        padding-right: 10px;
                                        padding-top: 50px;
                                        text-align: center;
                                      "
                                    >
                                      <div align="center" class="alignment">
                                        <table
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="social-table"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            display: inline-block;
                                          "
                                          width="230px"
                                        >
                                          <tr>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://www.facebook.com/"
                                                target="_blank"
                                                ><img
                                                  alt="Facebook"
                                                  height="32"
                                                  src="images/facebook2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="Facebook"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://twitter.com/"
                                                target="_blank"
                                                ><img
                                                  alt="Twitter"
                                                  height="32"
                                                  src="images/twitter2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="Twitter"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://instagram.com/"
                                                target="_blank"
                                                ><img
                                                  alt="Instagram"
                                                  height="32"
                                                  src="images/instagram2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="Instagram"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a
                                                href="https://www.linkedin.com/"
                                                target="_blank"
                                                ><img
                                                  alt="LinkedIn"
                                                  height="32"
                                                  src="images/linkedin2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="LinkedIn"
                                                  width="32"
                                              /></a>
                                            </td>
                                            <td style="padding: 0 7px 0 7px">
                                              <a href="" target="_blank"
                                                ><img
                                                  alt="YouTube"
                                                  height="32"
                                                  src="images/youtube2x.png"
                                                  style="
                                                    display: block;
                                                    height: auto;
                                                    border: 0;
                                                  "
                                                  title="YouTube"
                                                  width="32"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-4"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                        padding-top: 25px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 28px;
                                            "
                                          >
                                            If you have any questions, feel free
                                            message us at support@mailus.com. All
                                            right reserved. Update
                                            <a
                                              href="#"
                                              rel="noopener"
                                              style="
                                                text-decoration: none;
                                                color: #555555;
                                              "
                                              target="_blank"
                                              >email preferences</a
                                            >
                                            or
                                            <a
                                              href="#"
                                              rel="noopener"
                                              style="
                                                text-decoration: none;
                                                color: #555555;
                                              "
                                              target="_blank"
                                              >unsubscribe</a
                                            >.
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="text_block block-5"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        padding-bottom: 10px;
                                        padding-left: 40px;
                                        padding-right: 40px;
                                      "
                                    >
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            mso-line-height-alt: 24px;
                                            color: #555555;
                                            line-height: 2;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 14px;
                                              text-align: center;
                                              mso-line-height-alt: 28px;
                                            "
                                          >
                                            5781 Spring St Salinas, Idaho 88606
                                            United States
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-18"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            background-color: #ffffff;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 0px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="10"
                                  cellspacing="0"
                                  class="text_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    word-break: break-word;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td class="pad">
                                      <div style="font-family: sans-serif">
                                        <div
                                          class=""
                                          style="
                                            font-size: 12px;
                                            font-family: Montserrat, Trebuchet MS,
                                              Lucida Grande, Lucida Sans Unicode,
                                              Lucida Sans, Tahoma, sans-serif;
                                            mso-line-height-alt: 14.399999999999999px;
                                            color: #ffffff;
                                            line-height: 1.2;
                                          "
                                        >
                                          <p
                                            style="
                                              margin: 0;
                                              font-size: 12px;
                                              text-align: center;
                                              mso-line-height-alt: 14.399999999999999px;
                                            "
                                          >
                                            <span style="color: #555555"
                                              >Terms of use
                                              <strong>|</strong> Privacy
                                              Policy</span
                                            >
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-19"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 0px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="image_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        width: 100%;
                                        padding-right: 0px;
                                        padding-left: 0px;
                                      "
                                    >
                                      <div
                                        align="center"
                                        class="alignment"
                                        style="line-height: 10px"
                                      >
                                        <img
                                          alt="Alternate text"
                                          class="big"
                                          src="images/white_down.png"
                                          style="
                                            display: block;
                                            height: auto;
                                            border: 0;
                                            width: 700px;
                                            max-width: 100%;
                                          "
                                          title="Alternate text"
                                          width="700"
                                        />
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-20"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <div
                                  class="spacer_block"
                                  style="
                                    height: 25px;
                                    line-height: 25px;
                                    font-size: 1px;
                                  "
                                >
                                   
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  border="0"
                  cellpadding="0"
                  cellspacing="0"
                  class="row row-21"
                  role="presentation"
                  style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                  width="100%"
                >
                  <tbody>
                    <tr>
                      <td>
                        <table
                          align="center"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          class="row-content stack"
                          role="presentation"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            color: #000000;
                            width: 700px;
                          "
                          width="700"
                        >
                          <tbody>
                            <tr>
                              <td
                                class="column column-1"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  font-weight: 400;
                                  text-align: left;
                                  vertical-align: top;
                                  padding-top: 5px;
                                  padding-bottom: 5px;
                                  border-top: 0px;
                                  border-right: 0px;
                                  border-bottom: 0px;
                                  border-left: 0px;
                                "
                                width="100%"
                              >
                                <table
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="icons_block block-1"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                  "
                                  width="100%"
                                >
                                  <tr>
                                    <td
                                      class="pad"
                                      style="
                                        vertical-align: middle;
                                        color: #9d9d9d;
                                        font-family: inherit;
                                        font-size: 15px;
                                        padding-bottom: 5px;
                                        padding-top: 5px;
                                        text-align: center;
                                      "
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                        "
                                        width="100%"
                                      >
                                        <tr>
                                          <td
                                            class="alignment"
                                            style="
                                              vertical-align: middle;
                                              text-align: center;
                                            "
                                          >
                                            <!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
                                            <!--[if !vml]><!-->
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- End -->
      </body>
    </html>
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendForPasswordUpdate: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.password_Changed,
      text: `   
    Hi ${body.firstName},
        Please Change your password using below 
        Link:- https://ecommercefa.netlify.app/confirmpassword?uid=${body._id}
    Regards,
    ECOM
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendForPasswordUpdateSuccess: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.password_Changed,
      text: `   
    Hi ${body.firstName},
    Your password has been changed successfully
    Regards,
    ECOM
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendOrderSuccess: async (body, response) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: response.userId.email,
      subject: CONFIG.emailSubject.order_confirmation,
      html: `
      <html>
<body>

<div  style="background-color:#ffffff;border: 4px solid #b4b4b4;">
<table style="margin:10px;"  width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td colspan="2"><img style ="margin-left:10px;margin-top:10px" src="https://ecommercefa.netlify.app/images/logo.png" width="150"  /></td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td width="49%"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td><table style ="margin-left:10px" width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif;font-weight:600; font-size:15px;">Payment Information</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Date: ${
              response.createdAt
            }</td>
          </tr>
          <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Payment-Id: ${
            response.paymentId
          }</td>
        </tr>
        <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Order-Status: ${
            response.orderStatus
          }</td>
        </tr>
        <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Promo-code used: ${
          response.promocodeId.couponcode
        }</td>
      </tr>
          <tr>
            <td> </td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:15px;">Invoice to: </td>
          </tr>
          <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
            response.userId.firstName + " " + response.userId.lastName
          }</td>
        </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
              response.addressId.address_1
            }</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
              response.addressId.address_2
            }</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
              response.addressId.landmark
            }</td>
          </tr>
          <tr>
          <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">${
            response.addressId.pincode
          }</td>
        </tr> 
          <tr>
            <td> </td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Phone no:${
              response.userId.phoneNumber
            }</td>
          </tr>
          <tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;">Addres-type:${
              response.addressId.type
            }</td>
          </tr>
        
          <tr>
            <td> </td>
          </tr>
          </table></td>
      </tr>
    </table></td>
    
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"><table width="97%" border="0" cellspacing="0" cellpadding="0">
      <thead>
      <tr>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" width="34%" height="32" align="center">Product Name</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="26%" align="center">Quantity</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333;" width="25%" align="center">Price</td>
        <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px; border-top:1px solid #333; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" width="15%" align="center">Discount-Price</td>
      </tr>
      </thead>
      <tbody>
      ${response.cartdetail
        .map(
          (value) =>
            `<tr>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-left:1px solid #333; border-right:1px solid #333;" height="32" align="center">${value.productId.name}</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${value.quantity}</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333;" align="center">${value.productId.price}</td>
            <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px; border-bottom:1px solid #333; border-right:1px solid #333; border-right:1px solid #333;" align="center">${value.productId.discountPrice}</td>
          </tr>`
        )
        .join("")}
      </tbody>
    </table></td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr >

    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Discount-taken: ${
      response.discountPrice
    }</td>
   
  </tr>
  <tr >

    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Total amount to be paid: ${
      response.totalPrice
    }</td>
   
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">Please Note:</td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">Dear Consumer, the bill payment will reflect in next 48 hours or in the next billing cycle, at your service provider’s end. Please  contact paytm customer support for any queries regarding this order.</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:600; font-size:13px;" colspan="2">DECLARATION:</td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2">This is invoice is only a confirmation of the receipt of the amount paid against for the service as described above.  Subject to terms and conditions mentioned at Shoppy</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td style="font-family:Verdana, Geneva, sans-serif; font-weight:300; font-size:13px;" colspan="2" align="center">(This is computer generated receipt and does not require physical signature.)  <br />804, Fortune Business Hub,<br/>Ahmedabad, Gujarat. 380060, <br/> PH: +91 79-46006836<br />  Service tax registration number: AAACO4007ASD002</td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
  <tr>
    <td colspan="2"> </td>
  </tr>
</table>
</div>
</body>
</html>
      `,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendForAdminRegister: async (body, password) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.Welcome,
      text: `Hi ${body.firstName},
         You have successfully registered to our Admin and your password is ${password}
        Regards,
        ECOM`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendPwdUpdationSuccessfull: async (body, password) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.Welcome,
      text: `Hi ${body.firstName},
         Your passwors has been updated and your new password is ${password}.
        Regards,
        ECOM`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  sendPwdByMail: async (body, password) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.Welcome,
      text: `Hi ${body.firstName},
         Your passwors has been updated and your new password is ${password}.
        Regards,
        ECOM`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
  adminUser_Pwd_Mail_Link: async (body) => {
    let mailOptions = {
      from: CONFIG.email.SENDMAILFROM,
      to: body.email,
      subject: CONFIG.emailSubject.password_Changed,
      text: `   
    Hi ${body.firstName},
        Please Change your password using below 
        Link:- https://ecommercefa.netlify.app/confirmpassword?uid=${body._id}
    Regards,
    ECOM
`,
    };
    try {
      const sendedMail = await transporter.sendMail(mailOptions);
      if (sendedMail.response) {
        return {
          successMail: true,
          messageMail: "Mail sended",
        };
      } else {
        return {
          successMail: false,
          messageMail: "EMAIL NOT SENT",
        };
      }
    } catch (error) {
      return { successMail: false, messageMail: "ERROR HAPPEND IN SEND MAIl" };
    }
  },
};

//   text: `Hi ${body.firstName},
//   You have successfully registered as an ${body.role} and your
//   password is ${body.password}
//   Regards,
//  ECOM`,
