/*globals require, describe, it, expect*/

// 'use strict';

var fizzbuzz = require("../fizzbuzz.js").fizzbuzz;


describe('fizz buzz', function() {
it('should return 0 given 0', function() {
  expect(fizzbuzz.getResult(0)).toEqual(0);
 });
it('should return 1 given 1', function() {
  expect(fizzbuzz.getResult(1)).toEqual(1);
 });
it('should return 2 given 2', function() {
  expect(fizzbuzz.getResult(2)).toEqual(2);
 });
it('should return Fizz given 3', function() {
  expect(fizzbuzz.getResult(3)).toEqual('Fizz');
 });
it('should return 4 given 4', function() {
  expect(fizzbuzz.getResult(4)).toEqual(4);
 });
it('should return Buzz given 5', function() {
  expect(fizzbuzz.getResult(5)).toEqual('Buzz');
 });
it('should return Fizz given 6', function() {
  expect(fizzbuzz.getResult(6)).toEqual('Fizz');
 });
});

