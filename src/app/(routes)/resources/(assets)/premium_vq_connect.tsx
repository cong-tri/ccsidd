/** @format */

// premium vq connect service
export const premium_vq_connect = {
  header: "1505 Premium Connect / 15050 VQ Connect",
  info: [
    {
      title: "How do we dial overseas?",
      description: (
        <>
          To dial overseas in Singapore through CCS network, users should dial
          as follow: <br />
          1505 + Country Code + Area Code + Destination Number <br />
          For example, dialing a number in Los Angeles, US: <br />
          1505 (prefix) 1 (country code) 213 (area code) 5541212 (destination
          number) <br />
          For 15050 VQ Connect, user can dial as follow: <br />
          15050 (prefix) 1 (country code) 213 (area code) 5541212 (destination
          number)
        </>
      ),
    },
    {
      title:
        "What is the problem when you are unable to dial through CCS network?",
      description: (
        <>
          If you are a new customer, tentatively your number had not been
          registered yet to our system. You will have to check with our customer
          service team to check if your number has been activated. <br />
          If you are an existing customer, did your Company had recently done
          any changes to your phone system? If Yes, then we will need to send
          our technician to check on our customer premises devices (if any). If
          No, then you may need to contact our customer service hotline,
          preferable if you can provide us with the numbers dialed. We will do a
          thorough check and revert to you soonest. <br />
          In most cases, it could be due to busy line at the destination
          receivable party or incorrect number dialed. <br />
          There are some unique situation where the customer numbers had been
          barred by their fixed line provider to access 15XX prefixes. In this
          case, customer may need to contact their fixed line provider to
          release the block. <br />
          Otherwise, please kindly contact our customer service hotline for
          verification. Our Customer Service will test and remedy the situation
          if failure of network is found.
        </>
      ),
    },
    {
      title:
        "Do we need to install any Customer Premises Device (CPE) to utilize our services?",
      description:
        "It will depend on the customers dialing habit. In fact, it is not mandatory to do so as customer can choose to dial CCS prefix 1505 manually for making any international call. However, if customer would not want to change their usual way of dialing, like using already pre-programmed memory dial, we are able to install a device known as an autodialer. This CPE is able to perform the necessary digit conversion and route all of the customer calls to CCS voice network. In some phone system, programming can be done within itself by a certified phone system engineer, depending on the make of the phone system. ",
    },
    {
      title: "If we are using ISDN-30, are we able to use CCS services?",
      description:
        "Yes, customer who are using ISDN-30 connected to their digital phone system are able to utlize CCS voice network by either manual dial, programming to be done on the phone system or by installing an autodialer that is meant for ISDN-30 lines. However, we do not support lines on ISDN 2B+D as we do not have a supported autodialer. Customers with such lines will only be possible to dial through us manually.",
    },
    {
      title:
        "If we are using the Centrex System, are we able to utilize CCS services?",
      description:
        "We are able to support analog centrex system, where the phone line that is laid to customer premises are analog in nature. We should be able to install an autodialer on such lines. However, we are unable to support digital centrex system with our autodialer. Therefore, manual dial is the only option for digital centrex system. Alternatively, customer can program the numbers with our 1505 prefix into their memory dial setup, to route their calls to CCS voice network.",
    },
    {
      title: "Why are we able to provide such services at such low cost?",
      description:
        "The reason is that we are buying bulk wholesale minutes. We have worked with various carriers since we started our services, which helps us in maintaining consistent low rates that we can provide to our customers.",
    },
    {
      title: "Why do phone numbers in other countries has a leading 0?",
      description: (
        <>
          Singapore is a small country where we are a single state country. In
          other countries, usually they are made up of different states. For
          example, in China, different states number will have different area
          code. Shanghai 21, Beijing 10. To call a number from Shanghai to
          Beijing, the user will dial 0 10 12345678. For user to call from
          Shanghai to Beijing, the user will dial 0 21 12345678. This is a
          standard way to dial a domestic or inter-state call. In some
          situation, if you call within the same province, it will still work
          without dialing the leading 0. <br />
          If you are in Singapore, and your business associates business card
          states the phone numbers with a leading 0, you will need to omit the
          leading 0 and dial as follow: <br />0 21 12345678  1505 86 21
          12345678.
        </>
      ),
    },
    {
      title:
        "Why the international prefix for other countries are different from Singapore?",
      description:
        "This is because the telecommunication business in Singapore is fully liberalized. There are many different Long Distance Calls provider, operating using different prefixes. In Singapore, we usually make IDD calls using 3-digit prefixes like 001,002, 008, 018,019 or 021 provided by FBO. For all SBO, a 4 digit prefix Is used with a leading 15 follow by 2 other numbers that is issued by IDA. For CCS, our prefix will be 1505.",
    },
    {
      title: "Can we use CCS 1505 or 15050 services while overseas?",
      description:
        "While you are overseas and you want to call to a Singapore number from the foreign destination, you will need to dial either with a leading + or 00. These are the international Direct Dial prefix for most countries with more than 1 state or province. Please kindly take note that the 1505 Premium Connect / 15050 VQ Connect services we are providing is only applicable  in Singapore.",
    },
    {
      title: "Is there possibilities for customers phone systems be hacked?",
      description: (
        <>
          In traditional phone systems where there is no data links, where there
          is no internet connectivity, the only possible tap is to physically
          access the telephone wires. Therefore, access to risers and telephone
          lines termination point at customer premises should be prohibited to
          non-essential personnel. <br />
          Due to the trend where Companies resort to linking up cross boder
          offices, a new form of phone systems are introduced. In fact, most
          phone systems providers have introduced phone systems with internet
          protocol ability. The software within the phone systems will allow
          inter-office calls at no costs. However, this will bring threats from
          the internet where hackers had made used of the new form of media to
          infiltrate the phone systems, which had resulted in heavy losses to
          customer due to to make unsolicited calls through the customer phone
          system. <br />
          However, ip enabled phone system may not be the only way where the
          system can be compromised. There are some IP phones or IP gateways
          that can be installed on direct phone lines or behind any phone
          systems, which can be a serious threat to Company phone lines being
          hacked.
        </>
      ),
    },
    {
      title:
        "How can we make protection to prevent Internet Protocol (IP) enabled phone systems being hacked?",
      description: (
        <>
          In order to fence off attacks from hackers, the most important thing
          to do is to ensure that the default administrator password to the
          phone system is changed. Possibly, it should be change at least at
          intervals of 3 months. If the IP feature is not utilised, the phone
          system should never leave to connect to the Internet. Also, customers
          should not allow any IP enabled voice device to be installed within
          any part of the phone system unless the installation is properly
          secured either by Company Administrator or its product specialists.
          <br />
          It must be remember that service providers are only able to detect
          such attacks when there is a surge amount of calls leading to
          non-frequently called destinations. These destinations are usually
          very high in costs and somehow that even service provider are unable
          to notice due to the high volume of traffic passing through the routes
          they are using. <br />
          Therefore, prevention is always the safest bet to ensure that your
          phone system is properly secured before enabling the IP capabilities.
          If the phone systems is compromised, then it may result to serious
          losses to the customer as in most of the situation, the customer may
          have to bear the costs for all the unsolicted calls.
        </>
      ),
    },
    {
      title: "What happens if you fail to pay on time?",
      description: (
        <>
          (1) Customer having 3 months outstanding will be suspended of all
          services. <br />
          (2) Customer having long due outstanding will have their services and
          account terminated. <br />
          (3) Should you require to reinstate the services before termination
          takes place after payment is done, please email to ar@ccsidd.com for
          reviewing.
        </>
      ),
    },
  ],
};
