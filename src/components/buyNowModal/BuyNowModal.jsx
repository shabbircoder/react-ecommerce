import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";
// import { PiCode } from "react-icons/pi";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type="button"
        onClick={handleOpen}
        className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
        >
        Buy now
      </Button>
      <Dialog open={open} onClose={handleOpen} className=" bg-pink-50">
        <DialogBody className="">
          <div className="mb-3">
            <input
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              type="text"
              name="name"
              placeholder="Enter your name"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>
          <div className="mb-3">
            <input
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              type="text"
              name="address"
              placeholder="Enter your address"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="mb-3">
            <input
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              type="number"
              name="pincode"
              placeholder="Enter your pincode"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="mb-3">
            <input
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              type="text"
              name="mobileNumber"
              placeholder="Enter your mobileNumber"
              className="bg-pink-50 border border-pink-200 px-2 py-2 w-full rounded-md outline-none text-pink-600 placeholder-pink-300"
            />
          </div>

          <div className="">
            <Button
              type="button"
              onClick={()=>{
                handleOpen();
                buyNowFunction();
              }}
              className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
            >
              Confirm
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;
