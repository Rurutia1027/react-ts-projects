// pages/index.tsx

import React from "react";
import Script from "next/script";
import { SWRConfig } from "swr";
import RelayDashboard from "../relay/RelayDashboards";
import {
  Builder,
  Payload,
  PayloadStats,
  Validator,
  ValidatorStats,
} from "../relay/types";

const mockPayloadStats: PayloadStats = {
  count: 1000,
  totalValue: 50000,
  firstPayloadAt: new Date(),
};

const mockTopBuilders: Array<Builder> = [
  { builderName: "Builder 1", blockCount: 200 },
  { builderName: "Builder 2", blockCount: 150 },
  { builderName: "Builder 3", blockCount: 100 },
];

const mockTopPayloads: Array<Payload> = [
  {
    blockNumber: 1234,
    insertedAt: new Date(),
    value: 100,
  },
  {
    blockNumber: 5678,
    insertedAt: new Date(),
    value: 200,
  },
];

const mockValidatorStats: ValidatorStats = {
  validatorCount: 5,
  knownValidatorCount: 4,
};

const mockValidators: Array<Validator> = [
  { insertedAt: new Date(), index: "validator-1" },
  { insertedAt: new Date(), index: "validator-2" },
  { insertedAt: new Date(), index: "validator-3" },
  { insertedAt: new Date(), index: "validator-4" },
  { insertedAt: new Date(), index: "validator-5" },
];

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to eth-analysis-ui</h1>
      <RelayDashboard
        payloadStats={mockPayloadStats}
        payloads={mockTopPayloads}
        topBuilders={mockTopBuilders}
        topPayloads={mockTopPayloads}
        validatorStats={mockValidatorStats}
        validators={mockValidators}
      />
    </div>
  );
};

export default Home;
