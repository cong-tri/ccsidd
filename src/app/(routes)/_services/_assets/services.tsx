/** @format */

export type ListServices = {
  title: string;
  name: string;
  description: React.ReactElement;
  img: string;
}

export const services: ListServices[] = [
  {
    title: "Mobile Service",
    name: "Mobile Virtual Network Operator",
    description: (
      <>
        <p>
          CCS has attained the{" "}
          <span style={{ color: "#1565c0" }}>
            Mobile Virtual Network Operator License (MVNO)
          </span>{" "}
          in 2009, where we provide postpaid mobile plans to our customers.
        </p>
        <p>
          CCS had maintained close working relationship with our existing
          backend providers, in providing attractive and competitive pricing
          plans offering to our customers.
        </p>
        <p>
          We have built a good base of customers who are enjoying good pricing
          schemes and maintaining a responsive customer service team, to assist
          in resolving their day-to-day mobile issues.
        </p>
        <p>
          We are able to provide an in-depth analysis on your existing mobile
          bills and defined the most economical plans to suit your needs.
        </p>
      </>
    ),
    img: "/images/service/ser-item-2.png",
  },

  {
    title: "R Tone",
    name: "R Tone service",
    description: (
      <>
        <p>
          <span style={{ color: "#1565c0" }}>The R Tone service</span> is a break through effort for our customers to
          affordable roaming services while travelling.
        </p>
        <p>
          We have been spending gruelling effort to design and create an
          application which is able to reside in smart phones, to make and
          receive calls while customers travel overseas.
        </p>
        <p>
          Though there has been limitation to its availability, we are in search
          of a balance to ensure the solution can be consistent and maintain the
          highest quality for a decent business call.
        </p>
      </>
    ),
    img: "/images/service/ser-item-5.png",
  },

  {
    title: "Call Forwarding",
    name: "International Call Forwarding",
    description: (
      <>
        <p>
          <span style={{ color: "#1565c0" }}>The CCS International Call Forwarding (ICF)</span> is basically to resolved the issues relating to high cost for
          incoming calls while travelling overseas.
        </p>
        <p>
          It works with an overseas mobile number attained in the foreign
          destination. In most of the countries, incoming calls to their native
          prepaid mobile number is free.
        </p>
        <p>
          ICF is meant to provide a local number in Singapore that will link to
          your overseas mobile number, so that when the local number is called,
          you will be able to receive the call on your overseas mobile.
        </p>
        <p>
          In combining both{" "}
          <span style={{ color: "#1565c0" }}>CCS Callback Service</span> and CCS
          International Call Forward Service, it will bring massive savings to
          your overall roaming bills.
        </p>
      </>
    ),
    img: "/images/service/ser-item-6.png",
  },

  {
    title: "Premium Connect",
    name: "1505 Premium Connect",
    description: (
      <>
        <p>
          <span style={{ color: "#1565c0" }}>The 1505 Premium Connect</span> service is an alternative to making Long
          Distance Calls in Singapore.
        </p>
        <p>
          We are able to provide uncompromising call quality which is comparable
          to the{" "}
          <span style={{ color: "#1565c0" }}>
            International Direct Dial (IDD)
          </span>{" "}
          as offered by{" "}
          <span style={{ color: "#1565c0" }}>Fixed Based Operators (FBO)</span>{" "}
          .
        </p>
        <p>
          We have sinced providing a consistent and robust voice network to our
          faithful customers while enjoying massive savings on their
          International calls.
        </p>
      </>
    ),
    img: "/images/service/ser-item-1.png",
  },
];
