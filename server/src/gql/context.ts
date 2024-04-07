export type AppContext = {
  example: string;
};

const context = async () => ({
  example: "something",
});

export default context;
