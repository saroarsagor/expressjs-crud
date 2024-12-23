exports.Hello = (req, res) => {
    res.status(200).json({ status: "success", data: "Hello" });
  };

  exports.HelloPost = (req, res) => {
    res.status(200).json({ status: "success", data: "Hello post" });
  };
  