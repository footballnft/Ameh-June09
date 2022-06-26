import React from "react";
import OnramperWidget from "@onramper/widget";

export default function WidgetContainer() {
  const wallets = {
    BTC: { address: "btcAddr" },
    BNB: { address: "bnbAddress", memo: "cryptoTag" },
  };

  return (
    <div
      style={{
        width: "440px",
        height: "595px",
      }}
    >
      <OnramperWidget
        API_KEY="pk_prod_3ZFtZpByYVEh1WR4AZRXbhSdFCkZintPYXKKViCB3Yc0"
       // color={defaultColor}
       // fontFamily={fontFamily}
        defaultAddrs={wallets}
        defaultAmount={50}
       // defaultCrypto={defaultCrypto}
       // defaultFiat={defaultFiat}
        defaultFiatSoft="USD"
       // defaultPaymentMethod={defaultPaymentMethod}
        filters={{
         // onlyCryptos: ["BNB", "BUSD"]
         // excludeCryptos: excludeCryptos,
         // onlyPaymentMethods: onlyPaymentMethods,
         // excludePaymentMethods: excludePaymentMethods,
         // excludeFiat: ["NGN"],
        onlyGateways: ["Moonpay", "Wyre"]
         // onlyFiat: onlyFiat,
        }}
        isAddressEditable={false}
       // amountInCrypto={amountInCrypto}
        redirectURL="https://amehswap.com"
      />
    </div>
  );
}