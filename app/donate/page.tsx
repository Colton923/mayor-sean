export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <p className="mb-4 text-lg max-w-prose">
        Thank you for supporting the Friends of Sean Cavanaugh. If you prefer to
        send your donation via check, money order, or cashier's check, please
        make it payable to:
      </p>
      <div className="bg-white p-4 rounded-md shadow-lg flex justify-start flex-col items-start">
        <p className="font-semibold mb-2">Friends of Sean Cavanaugh</p>
        <p className="font-semibold mb-2">118 South 8th Street</p>
        <p className="font-semibold mb-2">Monmouth, Illinois 61462</p>
      </div>
      <p className="mt-4">
        Please mail to the above. We greatly appreciate your generosity!
      </p>
    </div>
  );
}
