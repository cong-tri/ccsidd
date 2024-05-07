/** @format */

import React from "react";
import Link from "next/link";
import { Col, Collapse, CollapseProps, Row, Tabs, TabsProps } from "antd";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {
  ArrowRightOutlined,
  AudioOutlined,
  DoubleRightOutlined,
  DownloadOutlined,
  LinkOutlined,
  MobileOutlined,
  PhoneOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import styles from "../../../index.module.scss";

const contentPremiumConnect: CollapseProps["items"] = [
  {
    key: "1",
    label: "How do we dial oversea",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        To dial overseas in Singapore through CCS network, users should dial as
        follow:
        <br />
        1505 + Country Code + Area Code + Destination Number <br />
        For example, dialing a number in Los Angeles, US: <br />
        1505 (prefix) 1 (country code) 213 (area code) 5541212 (destination
        number) <br />
        For 15050 VQ Connect, user can dial as follow: <br />
        15050 (prefix) 1 (country code) 213 (area code) 5541212 (destination
        number)
      </Paragraph>
    ),
  },
  {
    key: "2",
    label:
      "What is the problem when you are unable to dial through CCS network?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        If you are a new customer, tentatively your number had not been
        registered yet to our system. You will have to check with our customer
        service team to check if your number has been activated. If you are an
        existing customer, did your Company had recently done any changes to
        your phone system? If Yes, then we will need to send our technician to
        check on our customer premises devices (if any). <br /> If No, then you
        may need to contact our customer service hotline, preferable if you can
        provide us with the numbers dialed. We will do a thorough check and
        revert to you soonest. In most cases, it could be due to busy line at
        the destination receivable party or incorrect number dialed. There are
        some unique situation where the customer numbers had been barred by
        their fixed line provider to access 15XX prefixes. <br /> In this case,
        customer may need to contact their fixed line provider to release the
        block. Otherwise, please kindly contact our customer service hotline for
        verification. Our Customer Service will test and remedy the situation if
        failure of network is found.
      </Paragraph>
    ),
  },
  {
    key: "3",
    label:
      "Do we need to install any Customer Premises Device (CPE) to utilize our services?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 5,
          expandable: true,
          symbol: "More",
        }}>
        It will depend on the customers dialing habit.In fact, it is not
        mandatory to do so as customer can choose to dial CCS prefix 1505
        manually for making any international call.However, if customer would
        not want to change their usual way of dialing, like using already pre-
        programmed memory dial, we are able to install a device known as an
        autodialer. This CPE is able to perform the necessary digit conversion
        and route all of the customer calls to CCS voice network.In some phone
        system, programming can be done within itself by a certified phone
        system engineer, depending on the make of the phone system.
      </Paragraph>
    ),
  },
  {
    key: "4",
    label: "If we are using ISDN-30, are we able to use CCS services?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 4,
          expandable: true,
          symbol: "More",
        }}>
        Yes, customer who are using ISDN-30 connected to their digital phone
        system are able to utlise CCS voice network by either manual dial,
        programming to be done on the phone system or by installing an
        autodialer that is meant for ISDN-30 lines. <br /> However, we do not
        support lines on ISDN 2B+D as we do not have a supported autodialer.
        Customers with such lines will only be possible to dial through us
        manually.
      </Paragraph>
    ),
  },
  {
    key: "5",
    label: "Why are we able to provide such services at such low cost?",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        The reason is that we are buying bulk wholesale minutes. <br /> We have
        worked with various carriers since we started our services, which helps
        us in maintaining consistent low rates that we can provide to our
        customers.
      </Paragraph>
    ),
  },
  {
    key: "6",
    label: "Why do phone numbers in other countries has a leading 0?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        Singapore is a small country where we are a single state country. In
        other countries, usually they are made up of different states. For
        example, in China, different states number will have different area
        code. Shanghai 21, Beijing 10. To call a number from Shanghai to
        Beijing, the user will dial 0 10 12345678. For user to call from
        Shanghai to Beijing, the user will dial 0 21 12345678. <br /> This is a
        standard way to dial a domestic or inter-state call. In some situation,
        if you call within the same province, it will still work without dialing
        the leading 0.
        <br /> If you are in Singapore, and your business associates business
        card states the phone numbers with a leading 0, you will need to omit
        the leading 0 and dial as follow:
        <br /> 0 21 12345678 <ArrowRightOutlined /> 1505 86 21 12345678.
      </Paragraph>
    ),
  },
  {
    key: "7",
    label:
      "Why the international prefix for other countries are different from Singapore?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 5,
          expandable: true,
          symbol: "More",
        }}>
        This is because the telecommunication business in Singapore is fully
        liberalized. There are many different Long Distance Calls provider,
        operating using different prefixes.
        <br /> In Singapore, we usually make IDD calls using 3-digit prefixes
        like 001,002, 008, 018,019 or 021 provided by FBO.
        <br /> For all SBO, a 4 digit prefix Is used with a leading 15 follow by
        2 other numbers that is issued by IDA. <br /> For CCS, our prefix will
        be 1505.
      </Paragraph>
    ),
  },
  {
    key: "8",
    label: "Can we use CCS 1505 or 15050 services while overseas?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 4,
          expandable: true,
          symbol: "More",
        }}>
        While you are overseas and you want to call to a Singapore number from
        the foreign destination, you will need to dial either with a leading +
        or 00.
        <br /> These are the international Direct Dial prefix for most countries
        with more than 1 state or province.
        <br /> Please kindly take note that the 1505 Premium Connect / 15050 VQ
        Connect services we are providing is only applicable in Singapore.
      </Paragraph>
    ),
  },
  {
    key: "9",
    label:
      "How can we make protection to prevent Internet Protocol (IP) enabled phone systems being hacked?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        In order to fence off attacks from hackers, the most important thing to
        do is to ensure that the default administrator password to the phone
        system is changed. Possibly, it should be change at least at intervals
        of 3 months. If the IP feature is not utilised, the phone system should
        never leave to connect to the Internet. Also, customers should not allow
        any IP enabled voice device to be installed within any part of the phone
        system unless the installation is properly secured either by Company
        Administrator or its product specialists. <br /> It must be remember
        that service providers are only able to detect such attacks when there
        is a surge amount of calls leading to non-frequently called
        destinations.
        <br /> These destinations are usually very high in costs and somehow
        that even service provider are unable to notice due to the high volume
        of traffic passing through the routes they are using.
        <br /> Therefore, prevention is always the safest bet to ensure that
        your phone system is properly secured before enabling the IP
        capabilities. If the phone systems is compromised, then it may result to
        serious losses to the customer as in most of the situation, the customer
        may have to bear the costs for all the unsolicted calls.
      </Paragraph>
    ),
  },
];
const contentMobileService: CollapseProps["items"] = [
  {
    key: "1",
    label: "How do we subscribe to CCS Mobile Services?",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        To know more about CCS Mobile Services, you can contact our Sales
        representatives at sales@ccsidd.com.
        <br /> We are able to offer attractive mobile packages as compared to
        mainstream service provider.
        <br /> We welcome corporate customers to hear our sales presentation and
        understand the posssibility to save on Company mobile bills.
      </Paragraph>
    ),
  },
  {
    key: "2",
    label: "Who will be invoicing for utilizing our mobile services?",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        Since we are licensed as MVNO, CCS is able to issue invoice directly to
        customers. All payments shall be paid directly to CCS.
      </Paragraph>
    ),
  },
  {
    key: "3",
    label:
      "Whenever there is any issue with the mobile lines, who should we contact?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        For any mobile issues while subscribed with CCS, customers can contact
        our CCS customer service team via our hotline at +6567481737 or simply
        send an email to us via service@ccsidd.com Our operating hours will be
        from 09:00H to 18:00H from Monday to Friday. For any urgent cases after
        office hours or during weekends, customers can contact their respective
        Sales representative where they will be able to assist in resolving
        their issues.
        <br /> We will try our utmost to ensure good after sales service is
        maintained. However, we acknowledge there is always limitation even
        within the mainstream service providers in Singapore, and we may not be
        able to fulfill certain requests after office hours.
      </Paragraph>
    ),
  },
];
const contentCallBack: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is CCS Callback Services?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        Callback is an old technology but effective way of saving costs to make
        a call while roaming. It will be able to cut down probably about 50% of
        the cost if users were to dial directly from their mobile phone while
        roaming. For CCS Callback Service, we will provide customer with a
        Singapore Number to dial to.
        <br /> This number is basically a triggering number. What it does is
        that when dialed, it will be able to reach our Singapore network, and
        our system will hang up the call upon receiving it. This is an
        non-connected call which therefore it’s not chargeable. Upon triggering,
        our network will do a call back to the subscriber’s mobile number as
        registered in advance with us.
        <br /> The subscriber will then answer the incoming call, and will be
        asked to dial the destination numbers and end with a # key. Customer
        should dial the country code, follow by area code, follow by destination
        and end with a # key. Once the # key is received, our system will dial
        to reach the number of the receiving party.
      </Paragraph>
    ),
  },
];
const contentCallForward: CollapseProps["items"] = [
  {
    key: 1,
    label: "What is CCS Call Forwarding Services?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        CCS Call Forwarding Services is to help customers to save on incoming
        calls or re-routed calls while roaming. It will work with customers
        holding with a local SIM card in the roaming country. When subscribed to
        CCS Call Forwarding services, subscribers will be given a Singapore
        local number. Customer will have to inform CCS of the number of the
        local SIM card of the roaming country. <br /> CCS network will map our
        Singapore local number to the local SIM card number of the roaming
        country. Just before departure from Singapore, subscriber should divert
        their Singapore Mobile number to the Singapore Local number we had
        assigned to them. In doing so, any incoming calls will be diverted to
        CCS network, where we will map to the subscriber’s overseas SIM card.
        The subscriber can then be able to receive any incoming calls when
        someone dials the Singapore Mobile number.
      </Paragraph>
    ),
  },
];
const contentRTONE: CollapseProps["items"] = [
  {
    key: 1,
    label: "What is CCS R Tone Services?",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        CCS R Tone Services is the latest services we have introduced, in
        helping customers to save costs in making calls while they are roaming.
        <br />
        We have created a mobile app that will work on most popular mobile
        Operating Systems, to allow our subscribers to call via the app.
        <br /> It is a VOIP technology where calls are transmitted via WIFI or
        3G/4G network.
      </Paragraph>
    ),
  },
  {
    key: 2,
    label: "Is it safe to call through R Tone?",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        CCS has invested very much effort in making R Tone as secure as
        possible. We have been testing our apps with an in-house developed
        systems to ensure calls are safe and secured.
      </Paragraph>
    ),
  },
  {
    key: 3,
    label: "How is R Tone voice quality compares to our normal phone calls?",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 4,
          expandable: true,
          symbol: "More",
        }}>
        R Tone if under a good data network connectivity can achieve voice
        quality as good as what we are able to achieve as in our mobile call. We
        are spending good effort to improvise and ensure our voice can achieve
        its best quality even under low bandwidth connectivity.
        <br /> However, R Tone will not function if data network is not
        available. While this is so, subscribers can still fall back on the
        traditional means to make a phone call while roaming.
      </Paragraph>
    ),
  },
  {
    key: 4,
    label:
      "Is there any difference between R Tone from apps like Instant Messaging (IM) applications?",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        Yes. There is some identical differences where R Tone allows user to
        call to any numbers in the world, where the rest are probably able to
        call to another mobile who are using the same app. While we are still
        improvising the R Tone Services, it will further develop to a better
        product than the mentioned apps.
      </Paragraph>
    ),
  },
];
const contentDefinitions: CollapseProps["items"] = [
  {
    key: 1,
    label: "International Direct Dial",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        IDD refers to a service offers by operators to make International Calls
        using a defined prefix.
      </Paragraph>
    ),
  },
  {
    key: 2,
    label: "Service Based Operator",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        When the telecommunication market liberalised in the year 2001, The
        Infocomm Development Authority of Singapore defined the
        telecommunication licenses issued into 2 different categories, namely
        Service Based Operator (SBO) and Fixed Based Operator (FBO) licenses.
        For SBO, it is further defined into 2 sub categories, namely CLASS and
        INDIVIDUAL licenses. A full description on each licenses can be obtained
        via Infocomm Development Authority (IDA) As its name apply, licensee
        will be able to provide telecommunication services, with no oblgation to
        building infrastructures as required by Fixed Based Operator (FBO).
      </Paragraph>
    ),
  },
  {
    key: 3,
    label: "Fixed Based Operator",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        FBO refers to the first tier telecommunication operators in Singapore.
        For a full listing of FBO operators in Singapore, please kindly refers
        to{" "}
        <span className={styles.colorBlue1}>
          Infocomm Development Authority (IDA)
        </span>
      </Paragraph>
    ),
  },
  {
    key: 4,
    label: "Public Switch Telecommunication Network (PSTN)",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        The PSTN refers to the telecommunication network that is linked between
        all the local phone lines and mobile lines service provider within a
        state or a country. It is a fundamental infrastructure that is built to
        ensure good reliability of the telecommunication network, to link up the
        every household fixed lines and mobile users to facilitate communication
        via a robust voice network.
      </Paragraph>
    ),
  },
  {
    key: 5,
    label: "Mobile Virtual Network Operator (MVNO)",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        MVNO refers to an operator providing mobile services to customers at
        their own branding, without owning and maintaining a physical mobile
        network. MVNO will have its liberty to work with any full fledged mobile
        operator to deliver their services.
      </Paragraph>
    ),
  },
  {
    key: 6,
    label: "Tandem Based Network (TDM network)",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        A TDM network is a traditional voice network where voice quality are at
        its best possible. It is a wide band uncompressed network where voice
        traffic per channel is allocated with a full 64K bits of bandwidth.
      </Paragraph>
    ),
  },
  {
    key: 7,
    label: "Customer Premises Equipment (CPE)",
    children: (
      <Paragraph id={styles.resContextCollapse}>
        A CPE refers to devices or equipments that are installed in customer’s
        premises. It could be an Autodailer, Gateway, etc...
      </Paragraph>
    ),
  },
  {
    key: 8,
    label: "Auto Dialer",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        Auto Dialer refers to a device which is installed in customer premises
        to perform simple prefix conversions, so that the user can maintain
        their usual dialing pattern. Basically, the device acts like part of the
        telephone wire, only when triggered upon when a match of the prefix that
        the user had dialed. For example, when user dials an international
        prefix 00X 1 213 554 1212, the auto dialer will be able to identify the
        prefix 00X, and replaced it with CCS prefix as 1505.
        <br /> Therefore when dialing out upon conversion, the number will then
        be dial as 1505 1 213 554 1212. To the user, the process is seamless.
        However, the Auto Dialer has to be powered on in order to be
        functional.If it is powered off, it is just like a wire to part of the
        telephone cable.
      </Paragraph>
    ),
  },
  {
    key: 9,
    label: "Centrex System",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 5,
          expandable: true,
          symbol: "More",
        }}>
        Centrex System refers to a form of service where customer need not
        purchase a physical phone system to enjoy the full features of a phone
        system. This is usually provided by service provider where they will
        have to lay the phone lines to customer premises. Though it looks like a
        direct line, the system allows customers to group a number of phone
        lines within an office and perform call control, like call transfer,
        call re-direct which is featured in a standard phone system. There is no
        physical equipments needed to be installed within customer premises
        other than the phone lines.
      </Paragraph>
    ),
  },
  {
    key: 10,
    label: "Instant Messaging (IM)",
    children: (
      <Paragraph
        id={styles.resContextCollapse}
        ellipsis={{
          rows: 6,
          expandable: true,
          symbol: "More",
        }}>
        Instant messaging is a form of messaging application similar to the
        chatting application used in desktop version in the earlier years. The
        delivery of messages can now be very reliable under a good data
        connection network, where users can view if the contacts are online or
        offline. It can also determined if the messages is being received or
        read by the receivers. There are 2 forms of how IM stores the messages.
        All the messages can be stored within the phone itself or it can be
        stored in a server. For IM that stores messages in the phone, messages
        will be lost if the app is installed onto another phone unless a backup
        is done and restore in the new phone. For server kept messages, you can
        still recover the messages for a period of time even if you may have
        installed the app in a new phone. <br /> The duration of how long to
        keep the messages can be configurable as well. IM has been an uproaring
        trend to the traditional Short Message System (SMS) used in mobile
        phones network. It has more interesting way to present gesture with
        emotion icons where traditional SMS is dull and limited to the amount of
        text send per message. The interface for IM also allows transmission of
        files across the users, which can serve like a mini collaboration tools.
        However, there is limitation to the use of IM, both users must installed
        the same application in order to use the services. Also, it has always
        been questionable on how secure when sending messages via IM unless
        service provider put in place some sort of encryption for point to point
        messaging.
      </Paragraph>
    ),
  },
];
const contentDowload = [
  {
    key: "1",
    label: "CS Mobile Terms and Conditions",
    dowloadForm: "/assets/download/CCS_Mobile_Terms_and_Conditions.pdf",
  },
  {
    key: "2",
    label: "CCS International Call Forwarding (ICF) Service",
    dowloadForm:
      "/assets/download/CCS_Letterhead_ICF_Notification_01112017.pdf",
  },
  {
    key: "3",
    label: "CCS Rateplan",
    dowloadForm: "/assets/download/CCS_Rateplan.pdf",
  },
  {
    key: "4",
    label: "CCS Service Agreement",
    dowloadForm: "/assets/download/CCS_Service_Agreement.pdf",
  },
  {
    key: "5",
    label: "Equipment Service Plan Undertaking",
    dowloadForm: "/assets/download/Equipment_Service_Plan_Undertaking.pdf",
  },
  {
    key: "6",
    label: "FAQ on R Tone",
    dowloadForm: "/assets/download/FAQ_on_R_Tone.pdf",
  },
  {
    key: "7",
    label: "R Tone additoinal agreement",
    dowloadForm: "/assets/download/R_Tone_additoinal_agreement.pdf",
  },
  {
    key: "8",
    label: "CCS IDD New Registration",
    dowloadForm: "/assets/download/CCS_IDD_New_Registration.pdf",
  },
  {
    key: "9",
    label: "CCS Mobile Registration Form",
    dowloadForm: "/assets/download/CCS_Mobile_Registration_Form.pdf",
  },
  {
    key: "10",
    label: "Data Passport 75 Countries Coverage",
    dowloadForm: "/assets/download/Data_Passport_75_Countries_Coverage.pdf",
  },
  {
    key: "11",
    label: "Transfer Fee Notice",
    dowloadForm: "/assets/download/Transfer_Fee_Notice.pdf",
  },
];

const TabCollapse = () => {
  const itemResourcesTab: TabsProps["items"] = [
    {
      key: "1",
      label: "1505 PREMIUM CONNECT 15050 VQ CONNECT",
      children: (
        <>
          <Collapse
            items={contentPremiumConnect}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "2",
      label: "MOBILE SERVICE",
      children: (
        <>
          <Collapse
            items={contentMobileService}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "3",
      label: "CALL BACK SERVICE",
      children: (
        <>
          <Collapse
            items={contentCallBack}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "4",
      label: "CALL FORWARDING SERVICE",
      children: (
        <>
          <Collapse
            items={contentCallForward}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "5",
      label: "R TONE SERVICE",
      children: (
        <>
          <Collapse
            items={contentRTONE}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "6",
      label: "DEFINITIONS",
      children: (
        <>
          <Collapse
            items={contentDefinitions}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "7",
      label: "DOWLOAD",
      children: (
        <>
          <Row gutter={20} align={"middle"} className='mt-4'>
            {contentDowload.map((items) => {
              return (
                <Col span={12} key={items.key} className='mb-8'>
                  <Title level={4} className={`${styles.colorBlue1}`}>
                    <DoubleRightOutlined />{" "}
                    <span className='ml-4'>{items.label}</span>
                    <Link
                      href={items.dowloadForm}
                      className={`${styles.colorChanging} text-lg ml-6 border-0 bg-transparent`}
                      // download
                      target='_blank'
                      rel='noopener noreferrer'>
                      <i>dowload</i>
                    </Link>
                  </Title>
                </Col>
              );
            })}
          </Row>
        </>
      ),
    },
  ];
  const itemResourcesTab1: TabsProps["items"] = [
    {
      key: "1",
      label: <LinkOutlined />,
      children: (
        <>
          <Collapse
            items={contentPremiumConnect}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "2",
      label: <MobileOutlined />,
      children: (
        <>
          <Collapse
            items={contentMobileService}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "3",
      label: <PhoneOutlined />,
      children: (
        <>
          <Collapse
            items={contentCallBack}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "4",
      label: <PhoneOutlined />,
      children: (
        <>
          <Collapse
            items={contentCallForward}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "5",
      label: <AudioOutlined />,
      children: (
        <>
          <Collapse
            items={contentRTONE}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "6",
      label: <ReadOutlined />,
      children: (
        <>
          <Collapse
            items={contentDefinitions}
            defaultActiveKey={["1"]}
            expandIconPosition='end'
            ghost
          />
        </>
      ),
    },
    {
      key: "7",
      label: <DownloadOutlined />,
      children: (
        <>
          {contentDowload.map((items) => {
            return (
              <div key={items.key} className='mb-6'>
                <Title level={5} className={`${styles.colorBlue1}`}>
                  <span>
                    <DoubleRightOutlined />
                  </span>
                  <span className='ml-4 w-full'>{items.label}</span>
                  <Link
                    href={items.dowloadForm}
                    className={`${styles.colorChanging} text-base ml-4`}
                    download={"file"}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <i>dowload</i>
                  </Link>
                </Title>
              </div>
            );
          })}
        </>
      ),
    },
  ];
  return (
    <>
      <Tabs
        centered
        id={styles.resourceTabDesktop}
        type='card'
        defaultActiveKey='1'
        items={itemResourcesTab}
      />
      <Tabs
        centered
        id={styles.resourceTabMobile}
        type='card'
        defaultActiveKey='1'
        items={itemResourcesTab1}
      />
    </>
  );
};

export default TabCollapse;
