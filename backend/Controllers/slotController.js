import slotModel from '../models/slotModel.js';

// Export each function individually using named exports
export const findAllSlots = (req, res) => {
  const date = req.query.date;

  if (date) {
    slotModel.find({ slotDate: date }, (error, data) => {
      if (error) {
        res.status(500).json({
          message: 'testing',
          error: error,
        });
      } else if (data.length === 0) {
        res.status(404).json('no slot found on this date');
      } else {
        res.status(200).json(data);
      }
    });
  } else {
    slotModel.find((error, data) => {
      if (error) {
        res.status(500).json({
          message: 'error fetching slots',
          error: error,
        });
      } else {
        res.status(200).json(data);
      }
    });
  }
};

export const findSlotById = (req, res) => {
  const id = req.params.id;

  slotModel.findOne({ _id: id }, (error, data) => {
    if (error) {
      res.status(500).json({
        message: 'error fetching slot',
        error: error,
      });
    } else if (!data) {
      res.status(404).json('no slot of such id exists');
    } else {
      res.status(200).json(data);
    }
  });
};

export const addSlot = (req, res) => {
  const input = req.body;
  const newSlot = new slotModel(input);

  newSlot.save((error, data) => {
    if (error) {
      res.status(500).json({
        message: 'error adding new slot',
        error: error,
      });
    } else {
      res.status(201).json(data);
    }
  });
};

export const updateSlot = (req, res) => {
  const id = req.params.id;
  const input = req.body;

  slotModel.findOneAndUpdate({ _id: id }, input, (error, data) => {
    if (error) {
      res.status(500).json({
        message: 'error deleting slot',
        error: error,
      });
    } else if (!data) {
      res.status(404).json('no slot of such id exists');
    } else {
      res.status(200).json({ removed: data });
    }
  });
};

export const deleteSlot = (req, res) => {
  const id = req.params.id;

  slotModel.findOneAndRemove({ _id: id }, (error, data) => {
    if (error) {
      res.status(500).json({
        message: 'error deleting slot',
        error: error,
      });
    } else if (!data) {
      res.status(404).json('no slot of such id exists');
    } else {
      res.status(200).json({ removed: data });
    }
  });
};
