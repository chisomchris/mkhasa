import { Wrapper } from "@/components/ui/wrapper";

export default function Page() {
  return (
    <Wrapper>
      <h2 className="text-2xl font-bold mb-4 font-fuzzy text-destructive">Delivery Policy</h2>

      <h3 className="text-xl font-bold mb-2 font-fuzzy">Business Days</h3>
      <p className="mb-4">Monday to Saturday</p>

      <hr />
      <section className="py-6">
        <h3 className="text-xl font-bold mb-2 font-fuzzy">
          General Information
        </h3>
        <p className="mb-4">
          We highly value every order from our esteemed customers and are
          grateful for the business opportunity offered to us. Thank you! Swift
          and safe delivery of your goods is crucial to us as it ensures better
          customer satisfaction and appraisal. To maintain the quality of our
          service, we have carefully selected our courier partners.
        </p>
        <p>Please note:</p>
        <ul className="list-disc pl-5">
          <li>
            All deliveries must be signed for. If you are unavailable, kindly
            inform us of an alternative recipient, such as a colleague or
            neighbor.
          </li>
          <li>
            Sundays and public holidays are excluded from delivery schedules and
            may affect delivery times.
          </li>
        </ul>
      </section>

      <hr />
      <section className="py-6">
        <h3 className="text-xl font-bold mb-2 font-fuzzy">
          Delivery Charges and Times
        </h3>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2 font-fuzzy">
            Orders Below ₦100,000
          </h4>
          <ul className="list-disc pl-5">
            <li>Delivery Cost: ₦2,500.00 within Lagos</li>
            <li>
              Delivery Time:
              <ul className="list-disc pl-5">
                <li>2 days max within Lagos</li>
                <li>5 days max outside Lagos</li>
              </ul>
            </li>
            <li>
              Orders placed after 4 pm will begin processing the next business
              day.
            </li>
            <li>
              Customers may occasionally be required to pick up their package
              from a designated office address.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h4 className="text-lg font-bold mb-2 font-fuzzy">
            Orders Above ₦100,000
          </h4>
          <ul className="list-disc pl-5">
            <li>Delivery Cost: Free within Lagos</li>
            <li>
              Delivery Time:
              <ul className="list-disc pl-5">
                <li>2 days max within Lagos</li>
                <li>5 days max outside Lagos</li>
              </ul>
            </li>
            <li>
              Orders placed after 4 pm will begin processing the next business
              day.
            </li>
            <li>
              Customers may occasionally be required to pick up their package
              from a designated office address.
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="py-6">
        <h3 className="text-xl font-bold mb-2 font-fuzzy">
          Important Information
        </h3>
        <ul className="list-disc pl-5 mb-4">
          <li>
            Mkhasa is not responsible for any damages caused after delivery.
          </li>
          <li>
            Mkhasa bears no responsibility for goods signed by an alternative
            person.
          </li>
          <li>
            All claims for shortages or damages must be reported to customer
            service on the day of delivery.
          </li>
          <li>
            We are unable to redirect orders once items have been shipped.
          </li>
        </ul>

        <p>
          If you have any further queries regarding Mkhasa delivery, please
          contact our Support Team at{" "}
          <a href="mailto:support@mkhasa.com" className="text-blue-500">
            support@mkhasa.com
          </a>{" "}
          from Monday to Saturday, 9.00 am - 8.00 pm.
        </p>
      </section>
    </Wrapper>
  );
}
