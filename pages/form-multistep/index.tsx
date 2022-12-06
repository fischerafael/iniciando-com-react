import React from "react";

const index = () => {
  const [screen, setScreen] = React.useState<number>(0);
  const [data, setData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });
  const [isSubmitted, setSubmitted] = React.useState(false);

  const handleNavigateToPrevious = () => {
    if (screen === 0) return;
    setScreen((state) => state - 1);
  };

  const handleNavigateToNext = () => {
    if (screen === 2) return;
    setScreen((state) => state + 1);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const isReadyToSubmit =
    data.email !== "" &&
    data.firstName !== "" &&
    data.lastName !== "" &&
    data.phone !== "" &&
    data.country !== "" &&
    data.city !== "";

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <>
          {screen === 0 && (
            <>
              <input
                value={data.firstName}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    firstName: e.target.value,
                  }))
                }
                type="text"
                placeholder="First Name"
              />
              <input
                value={data.lastName}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    lastName: e.target.value,
                  }))
                }
                type="text"
                placeholder="Last Name"
              />
            </>
          )}

          {screen === 1 && (
            <>
              <input
                value={data.email}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
                type="text"
                placeholder="Email"
              />
              <input
                value={data.phone}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    phone: e.target.value,
                  }))
                }
                type="text"
                placeholder="Phone Number"
              />
            </>
          )}

          {screen === 2 && (
            <>
              <input
                value={data.city}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    city: e.target.value,
                  }))
                }
                type="text"
                placeholder="Cidade"
              />
              <input
                value={data.country}
                onChange={(e) =>
                  setData((prevState) => ({
                    ...prevState,
                    country: e.target.value,
                  }))
                }
                type="text"
                placeholder="País"
              />
            </>
          )}

          <div>
            <button onClick={handleNavigateToPrevious}>Página Anterior</button>
            {isReadyToSubmit ? (
              <button onClick={handleSubmit}>Submter</button>
            ) : (
              <button onClick={handleNavigateToNext}>Próxima Página</button>
            )}
          </div>

          {isSubmitted && <p>{JSON.stringify(data)}</p>}
        </>
      </div>
    </div>
  );
};

export default index;
