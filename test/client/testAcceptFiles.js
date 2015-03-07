
describe('acceptFiles', function () {

  var $scope = null;
  var acceptFiles = null;

  beforeEach(function () {

    module('app');

    inject(function ($rootScope, acceptFilesFactory) {

      $scope = $rootScope.$new();
      acceptFiles = new acceptFilesFactory();

    });

  });

  describe('addAccept', function () {

    it('should add accept file', function () {

      var acceptFile = {
        id: null,
        fileId: null,
        filename: null,
        stats: null
      };

      acceptFiles.addFile(acceptFile, function (err) {

        expect(err).to.eql(null);
        expect(acceptFiles.acceptFiles.length).to.eql(1);

      });

    });

  });

  describe('getFiles', function () {

    beforeEach(function (done) {

      var acceptFile = {
        id: null,
        fileId: '1',
        filename: null,
        stats: null
      };

      acceptFiles.addFile(acceptFile, function (err) { done() });

    });

    it('should get error file does not exist', function () {

      acceptFiles.getFiles('fileId', '5', function (err, files) {

        expect(err).to.eql('file does not exist');
        expect(files.length).to.eql(0);

      });

    });

    it('should get files', function () {

      acceptFiles.getFiles('fileId', '1', function (err, files) {

        expect(err).to.eql(null);
        expect(files.length).to.eql(1);

      });

    });

  });

  describe('removeAccept', function () {

    beforeEach(function (done) {

      var acceptFile = {
        id: null,
        fileId: '1',
        filename: null,
        stats: null
      };

      acceptFiles.addFile(acceptFile, function (err) { done() });

    });

    it('should get error file does not exist', function () {

      acceptFiles.removeFiles('filename', 'temp.json', function (err) {

        expect(err).to.eql('file does not exist');
        expect(acceptFiles.acceptFiles.length).to.eql(1);

      });

    });

    it('should remove accept file', function () {

      acceptFiles.removeFiles('fileId', '1', function (err) {

        expect(err).to.eql(null);
        expect(acceptFiles.acceptFiles.length).to.eql(0);

      });

    });

  });

});
