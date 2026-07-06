const Qualification = require('../models/qualification.model');

exports.getAll = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: 'Qualification not found' });
    res.json(qualification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const qualification = new Qualification(req.body);
    const saved = await qualification.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateById = async (req, res) => {
  try {
    const updated = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Qualification not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const deleted = await Qualification.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Qualification not found' });
    res.json({ message: 'Qualification deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAll = async (req, res) => {
  try {
    await Qualification.deleteMany();
    res.json({ message: 'All qualifications deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
