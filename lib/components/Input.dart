import 'package:flutter/material.dart';

class InputField extends StatelessWidget {
  final TextEditingController _controller;
  final String _label;
  TextBox(this._controller, this._label);
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(20),
      child: TextField(
        controller: this._controller,
        decoration: InputDecoration(
            filled: true,
            labelText: this._label,
            suffix: GestureDetector(
              child: Icon(Icons.close),
              onTap: () {
                _controller.clear();
              },
            )),
      ),
    );
  }
}
