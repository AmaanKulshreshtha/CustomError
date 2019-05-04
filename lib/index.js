import { CONSTRUCTOR_CONFIG } from "./config";
import { defineStack } from "./helpers";
import EmptyObjectError from "./EmptyObjectError";
const styles = ['display: block', 'background: #E91E63', 'color: white', 'padding: 4px'].join(';');

function UndefinedObjectError(msg) {
  this.message = msg;
  this.name = this.constructor.name;
  let stack = new Error().stack;

  if (typeof stack === 'string') {
    this.stack = defineStack(stack);
  } else {
    Error.captureStackTrace(this, this.constructor);
  }
}

UndefinedObjectError.prototype = Object.create(Error.prototype, {
  constructor: Object.assign(CONSTRUCTOR_CONFIG, {
    value: UndefinedObjectError
  })
});

function getObjectKeys(obj) {
  try {
    if (obj === undefined) {
      throw new UndefinedObjectError('Passed object is undefined');
    }

    if (Object.keys(obj).length === 0) {
      throw new EmptyObjectError('Passed object is an empty object. There are no properties present inside the passed object');
    }

    return Object.keys(obj);
  } catch (err) {
    console.groupCollapsed('%c' + err.name, styles); // Start grouping

    console.log('%c' + err.message, styles, '\n Passed object:', obj);
    /* 
        Both the trace and stack options look good
        - You can customise the err.stack as per requirements
        - No customisations in console.trace()
    */

    console.log(err.stack); // console.trace();
    // End grouping

    console.groupEnd();
  }
}

const testObj1 = undefined;
const testObj2 = {}; // Test 1

getObjectKeys(testObj1); // Test 2

getObjectKeys(testObj2);
console.log(12321);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJDT05TVFJVQ1RPUl9DT05GSUciLCJkZWZpbmVTdGFjayIsIkVtcHR5T2JqZWN0RXJyb3IiLCJzdHlsZXMiLCJqb2luIiwiVW5kZWZpbmVkT2JqZWN0RXJyb3IiLCJtc2ciLCJtZXNzYWdlIiwibmFtZSIsImNvbnN0cnVjdG9yIiwic3RhY2siLCJFcnJvciIsImNhcHR1cmVTdGFja1RyYWNlIiwicHJvdG90eXBlIiwiT2JqZWN0IiwiY3JlYXRlIiwiYXNzaWduIiwidmFsdWUiLCJnZXRPYmplY3RLZXlzIiwib2JqIiwidW5kZWZpbmVkIiwia2V5cyIsImxlbmd0aCIsImVyciIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxvZyIsImdyb3VwRW5kIiwidGVzdE9iajEiLCJ0ZXN0T2JqMiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esa0JBQVQsUUFBbUMsVUFBbkM7QUFDQSxTQUFTQyxXQUFULFFBQTRCLFdBQTVCO0FBQ0EsT0FBT0MsZ0JBQVAsTUFBNkIsb0JBQTdCO0FBRUEsTUFBTUMsTUFBTSxHQUFHLENBQ1gsZ0JBRFcsRUFFVCxxQkFGUyxFQUdULGNBSFMsRUFJVCxjQUpTLEVBS2JDLElBTGEsQ0FLUixHQUxRLENBQWY7O0FBUUEsU0FBU0Msb0JBQVQsQ0FBOEJDLEdBQTlCLEVBQW1DO0FBQy9CLE9BQUtDLE9BQUwsR0FBZUQsR0FBZjtBQUNBLE9BQUtFLElBQUwsR0FBWSxLQUFLQyxXQUFMLENBQWlCRCxJQUE3QjtBQUdBLE1BQUlFLEtBQUssR0FBRyxJQUFJQyxLQUFKLEdBQVlELEtBQXhCOztBQUVBLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUMzQixTQUFLQSxLQUFMLEdBQWFULFdBQVcsQ0FBQ1MsS0FBRCxDQUF4QjtBQUNILEdBRkQsTUFFTztBQUNIQyxJQUFBQSxLQUFLLENBQUNDLGlCQUFOLENBQXdCLElBQXhCLEVBQThCLEtBQUtILFdBQW5DO0FBQ0g7QUFDSjs7QUFFREosb0JBQW9CLENBQUNRLFNBQXJCLEdBQWlDQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0osS0FBSyxDQUFDRSxTQUFwQixFQUErQjtBQUM1REosRUFBQUEsV0FBVyxFQUFFSyxNQUFNLENBQUNFLE1BQVAsQ0FBY2hCLGtCQUFkLEVBQWtDO0FBQzNDaUIsSUFBQUEsS0FBSyxFQUFFWjtBQURvQyxHQUFsQztBQUQrQyxDQUEvQixDQUFqQzs7QUFPQSxTQUFTYSxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUN4QixNQUFJO0FBRUEsUUFBSUEsR0FBRyxLQUFLQyxTQUFaLEVBQXVCO0FBQ25CLFlBQU0sSUFBSWYsb0JBQUosQ0FBeUIsNEJBQXpCLENBQU47QUFDSDs7QUFFRCxRQUFJUyxNQUFNLENBQUNPLElBQVAsQ0FBWUYsR0FBWixFQUFpQkcsTUFBakIsS0FBNEIsQ0FBaEMsRUFBbUM7QUFDL0IsWUFBTSxJQUFJcEIsZ0JBQUosQ0FBcUIsNEZBQXJCLENBQU47QUFDSDs7QUFFRCxXQUFPWSxNQUFNLENBQUNPLElBQVAsQ0FBWUYsR0FBWixDQUFQO0FBQ0gsR0FYRCxDQVdFLE9BQU9JLEdBQVAsRUFBWTtBQUVWQyxJQUFBQSxPQUFPLENBQUNDLGNBQVIsQ0FBdUIsT0FBT0YsR0FBRyxDQUFDZixJQUFsQyxFQUF3Q0wsTUFBeEMsRUFGVSxDQUdWOztBQUVBcUIsSUFBQUEsT0FBTyxDQUFDRSxHQUFSLENBQVksT0FBT0gsR0FBRyxDQUFDaEIsT0FBdkIsRUFBZ0NKLE1BQWhDLEVBQXdDLG1CQUF4QyxFQUE2RGdCLEdBQTdEO0FBQ0E7Ozs7OztBQUtBSyxJQUFBQSxPQUFPLENBQUNFLEdBQVIsQ0FBWUgsR0FBRyxDQUFDYixLQUFoQixFQVhVLENBWVY7QUFFQTs7QUFDQWMsSUFBQUEsT0FBTyxDQUFDRyxRQUFSO0FBRUg7QUFDSjs7QUFFRCxNQUFNQyxRQUFRLEdBQUdSLFNBQWpCO0FBQ0EsTUFBTVMsUUFBUSxHQUFHLEVBQWpCLEMsQ0FFQTs7QUFDQVgsYUFBYSxDQUFDVSxRQUFELENBQWIsQyxDQUVBOztBQUNBVixhQUFhLENBQUNXLFFBQUQsQ0FBYjtBQUVBTCxPQUFPLENBQUNFLEdBQVIsQ0FBWSxLQUFaIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09OU1RSVUNUT1JfQ09ORklHIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBkZWZpbmVTdGFjayB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbmltcG9ydCBFbXB0eU9iamVjdEVycm9yIGZyb20gXCIuL0VtcHR5T2JqZWN0RXJyb3JcIjtcblxuY29uc3Qgc3R5bGVzID0gW1xuICAgICdkaXNwbGF5OiBibG9jaydcbiAgICAsICdiYWNrZ3JvdW5kOiAjRTkxRTYzJ1xuICAgICwgJ2NvbG9yOiB3aGl0ZSdcbiAgICAsICdwYWRkaW5nOiA0cHgnXG5dLmpvaW4oJzsnKTtcblxuXG5mdW5jdGlvbiBVbmRlZmluZWRPYmplY3RFcnJvcihtc2cpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtc2c7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuXG5cbiAgICBsZXQgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcblxuICAgIGlmICh0eXBlb2Ygc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuc3RhY2sgPSBkZWZpbmVTdGFjayhzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3RvcilcbiAgICB9XG59XG5cblVuZGVmaW5lZE9iamVjdEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IE9iamVjdC5hc3NpZ24oQ09OU1RSVUNUT1JfQ09ORklHLCB7XG4gICAgICAgIHZhbHVlOiBVbmRlZmluZWRPYmplY3RFcnJvclxuICAgIH0pXG59KTtcblxuXG5mdW5jdGlvbiBnZXRPYmplY3RLZXlzKG9iaikge1xuICAgIHRyeSB7XG5cbiAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVW5kZWZpbmVkT2JqZWN0RXJyb3IoJ1Bhc3NlZCBvYmplY3QgaXMgdW5kZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFbXB0eU9iamVjdEVycm9yKCdQYXNzZWQgb2JqZWN0IGlzIGFuIGVtcHR5IG9iamVjdC4gVGhlcmUgYXJlIG5vIHByb3BlcnRpZXMgcHJlc2VudCBpbnNpZGUgdGhlIHBhc3NlZCBvYmplY3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopO1xuICAgIH0gY2F0Y2ggKGVycikge1xuXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoJyVjJyArIGVyci5uYW1lLCBzdHlsZXMpO1xuICAgICAgICAvLyBTdGFydCBncm91cGluZ1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCclYycgKyBlcnIubWVzc2FnZSwgc3R5bGVzLCAnXFxuIFBhc3NlZCBvYmplY3Q6Jywgb2JqKTtcbiAgICAgICAgLyogXG4gICAgICAgICAgICBCb3RoIHRoZSB0cmFjZSBhbmQgc3RhY2sgb3B0aW9ucyBsb29rIGdvb2RcbiAgICAgICAgICAgIC0gWW91IGNhbiBjdXN0b21pc2UgdGhlIGVyci5zdGFjayBhcyBwZXIgcmVxdWlyZW1lbnRzXG4gICAgICAgICAgICAtIE5vIGN1c3RvbWlzYXRpb25zIGluIGNvbnNvbGUudHJhY2UoKVxuICAgICAgICAqL1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAvLyBjb25zb2xlLnRyYWNlKCk7XG5cbiAgICAgICAgLy8gRW5kIGdyb3VwaW5nXG4gICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcblxuICAgIH1cbn1cblxuY29uc3QgdGVzdE9iajEgPSB1bmRlZmluZWQ7XG5jb25zdCB0ZXN0T2JqMiA9IHt9O1xuXG4vLyBUZXN0IDFcbmdldE9iamVjdEtleXModGVzdE9iajEpO1xuXG4vLyBUZXN0IDJcbmdldE9iamVjdEtleXModGVzdE9iajIpO1xuXG5jb25zb2xlLmxvZygxMjMyMSk7Il19